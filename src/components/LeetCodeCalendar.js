import { useState, useEffect } from 'react';

const LeetCodeCalendar = ({ 
  username = "leetcode_user", 
  blockSize = 15,
  blockMargin = 5,
  color = "#4FB0FF", // Sky blue color
  fontSize = 16,
  fontColor = "#FFFFFF",
  fontFamily = "Arial, sans-serif",
  fontWeight = "bold",
  borderRadius = 5,
  borderColor = "#4FB0FF",
  borderWidth = 1,
  borderStyle = "solid",
  tooltipColor = "#4FB0FF",
  tooltipTextColor = "#FFFFFF",
  tooltipFontSize = 14,
  tooltipFontFamily = "Arial, sans-serif",
  tooltipFontWeight = "bold"
}) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

  // Mock data generation for the calendar
  useEffect(() => {
    // In a real implementation, this would fetch data from LeetCode API
    setLoading(true);
    
    // Generate 365 days of mock data
    const mockData = [];
    const today = new Date();
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Generate random number of contributions (0-5)
      const count = Math.floor(Math.random() * 6);
      
      mockData.push({
        date: date.toISOString().split('T')[0],
        count,
        // Vary the color intensity based on count
        colorIntensity: count === 0 ? 0 : 0.2 + (count / 5) * 0.8,
      });
    }
    
    setContributions(mockData);
    setLoading(false);
  }, [username]);

  if (loading) return <div className="flex justify-center items-center p-4">Loading calendar...</div>;
  if (error) return <div className="text-red-500">Error loading data: {error}</div>;

  // Group contributions by month for display
  const months = {};
  contributions.forEach(day => {
    const monthYear = day.date.substring(0, 7);
    if (!months[monthYear]) {
      months[monthYear] = [];
    }
    months[monthYear].push(day);
  });

  // Convert months object to array and sort
  const sortedMonths = Object.keys(months).sort().map(key => ({
    monthYear: key,
    days: months[key]
  }));

  const getColorForCount = (count, colorIntensity) => {
    if (count === 0) return "#ebedf0"; // Light gray for zero contributions
    
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Apply intensity
    const adjustedR = Math.floor(r * colorIntensity);
    const adjustedG = Math.floor(g * colorIntensity);
    const adjustedB = Math.floor(b * colorIntensity);
    
    return `rgb(${adjustedR}, ${adjustedG}, ${adjustedB})`;
  };

  const getMonthName = (monthYear) => {
    const date = new Date(monthYear + "-01");
    return date.toLocaleString('default', { month: 'short' });
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        LeetCode Contributions for {username}
      </h2>
      
      {/* Month labels */}
      <div className="flex mb-2">
        <div className="w-12"></div> {/* Spacing for alignment */}
        {sortedMonths.map(({ monthYear }) => (
          <div 
            key={monthYear}
            className="text-sm text-gray-600"
            style={{ 
              marginLeft: blockMargin,
              width: blockSize * 4 + blockMargin * 3, // Approximate width for month
              textAlign: 'center',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            {getMonthName(monthYear)}
          </div>
        ))}
      </div>
      
      {/* Days of week labels and blocks grid */}
      <div className="flex">
        {/* Days of week */}
        <div className="flex flex-col mr-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
            <div 
              key={day}
              className="text-sm text-gray-600"
              style={{ 
                height: blockSize,
                marginBottom: blockMargin,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '4px'
              }}
            >
              {i % 2 === 0 ? day : ''} {/* Show only every other label to save space */}
            </div>
          ))}
        </div>
        
        {/* Calendar blocks */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex">
            {/* For each day in our dataset */}
            {contributions.map((day, index) => {
              const dayOfWeek = new Date(day.date).getDay(); // 0-6, where 0 is Sunday
              
              // If this is the first block or it's the first day of the week (Sunday)
              const isNewWeek = index === 0 || dayOfWeek === 0;
              
              // Create a wrapper div for each week column
              if (isNewWeek) {
                const weekBlocks = [];
                
                // Fill in the days of this week
                for (let i = 0; i < 7; i++) {
                  const dayIndex = index + i;
                  if (dayIndex < contributions.length) {
                    const currentDay = contributions[dayIndex];
                    const currentDayOfWeek = new Date(currentDay.date).getDay();
                    
                    // Skip if this position doesn't match the expected day of week
                    if (currentDayOfWeek !== i) continue;
                    
                    weekBlocks.push(
                      <div 
                        key={currentDay.date}
                        style={{ 
                          width: blockSize,
                          height: blockSize,
                          margin: blockMargin / 2,
                          backgroundColor: getColorForCount(currentDay.count, currentDay.colorIntensity),
                          borderRadius,
                          borderColor,
                          borderWidth,
                          borderStyle,
                          position: 'relative'
                        }}
                        onMouseEnter={() => setHoveredDay(currentDay)}
                        onMouseLeave={() => setHoveredDay(null)}
                      >
                        {hoveredDay && hoveredDay.date === currentDay.date && (
                          <div style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: tooltipColor,
                            color: tooltipTextColor,
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: tooltipFontSize,
                            fontFamily: tooltipFontFamily,
                            fontWeight: tooltipFontWeight,
                            whiteSpace: 'nowrap',
                            zIndex: 10
                          }}>
                            {currentDay.count} contribution{currentDay.count !== 1 ? 's' : ''} on {currentDay.date}
                          </div>
                        )}
                      </div>
                    );
                  }
                }
                
                return (
                  <div key={`week-${index}`} className="flex flex-col">
                    {weekBlocks}
                  </div>
                );
              }
              
              // Return null for days that are not the start of a week
              return null;
            })}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end mt-4">
        <span className="text-sm text-gray-600 mr-2">Less</span>
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((intensity, i) => (
          <div 
            key={i}
            style={{ 
              width: blockSize * 0.8,
              height: blockSize * 0.8,
              backgroundColor: intensity === 0 ? "#ebedf0" : getColorForCount(1, intensity),
              borderRadius: borderRadius * 0.8,
              margin: '0 2px'
            }}
          />
        ))}
        <span className="text-sm text-gray-600 ml-2">More</span>
      </div>
    </div>
  );
};

export default LeetCodeCalendar;