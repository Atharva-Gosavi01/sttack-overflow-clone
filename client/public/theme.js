const currentTime = new Date().getHours();

const morningStart = 6;
const afternoonStart = 12;
const eveningStart = 18;
const nightStart = 21;

let theme = 'default';

if (currentTime >= morningStart && currentTime < afternoonStart) {
    theme = 'morning';
} else if (currentTime >= afternoonStart && currentTime < eveningStart) {
    theme = 'afternoon';
} else if(currentTime >=eveningStart && currentTime < nightStart ){
    theme = 'evening';
} else{
    theme = 'night';
}

document.body.style.backgroundColor = getThemeColor(theme);

function getThemeColor(theme) {
    const themeColors = {
        'morning': '#ffffff', // Morning color
        'afternoon': '#ffdb4d', // Afternoon color
        'evening': '#87ceeb', // Evening color
        'night': '#818589', // Night color  
    };
    
    return themeColors[theme];
}