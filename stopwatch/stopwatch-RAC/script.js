document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Stopwatch elements
    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const startStopwatchBtn = document.getElementById('start-stopwatch');
    const pauseStopwatchBtn = document.getElementById('pause-stopwatch');
    const resetStopwatchBtn = document.getElementById('reset-stopwatch');
    
    // Countdown elements
    const countdownDisplay = document.getElementById('countdown-display');
    const startCountdownBtn = document.getElementById('start-countdown');
    const pauseCountdownBtn = document.getElementById('pause-countdown');
    const resetCountdownBtn = document.getElementById('reset-countdown');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    // Stopwatch variables
    let stopwatchInterval;
    let stopwatchRunning = false;
    let stopwatchTime = 0;
    
    // Countdown variables
    let countdownInterval;
    let countdownRunning = false;
    let countdownTime = 0;
    
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Format time (milliseconds) to HH:MM:SS
    function formatTime(timeInMilliseconds) {
        const time = Math.floor(timeInMilliseconds / 1000);
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        
        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':');
    }
    
    // Stopwatch functions
    function startStopwatch() {
        if (!stopwatchRunning) {
            stopwatchRunning = true;
            const startTime = Date.now() - stopwatchTime;
            
            stopwatchInterval = setInterval(() => {
                stopwatchTime = Date.now() - startTime;
                stopwatchDisplay.textContent = formatTime(stopwatchTime);
            }, 100);
            
            startStopwatchBtn.disabled = true;
            pauseStopwatchBtn.disabled = false;
        }
    }
    
    function pauseStopwatch() {
        if (stopwatchRunning) {
            stopwatchRunning = false;
            clearInterval(stopwatchInterval);
            
            startStopwatchBtn.disabled = false;
            pauseStopwatchBtn.disabled = true;
        }
    }
    
    function resetStopwatch() {
        pauseStopwatch();
        stopwatchTime = 0;
        stopwatchDisplay.textContent = '00:00:00';
    }
    
    // Countdown functions
    function updateCountdownInputs() {
        const totalSeconds = Math.floor(countdownTime / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }
    
    function getCountdownTimeFromInputs() {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        
        return (hours * 3600 + minutes * 60 + seconds) * 1000;
    }
    
    function startCountdown() {
        if (!countdownRunning) {
            // If countdown is reset or not set, get time from inputs
            if (countdownTime <= 0) {
                countdownTime = getCountdownTimeFromInputs();
                
                // Don't start if no time is set
                if (countdownTime <= 0) {
                    alert('Please set a countdown time');
                    return;
                }
            }
            
            countdownRunning = true;
            const endTime = Date.now() + countdownTime;
            
            countdownInterval = setInterval(() => {
                countdownTime = Math.max(0, endTime - Date.now());
                countdownDisplay.textContent = formatTime(countdownTime);
                
                if (countdownTime <= 0) {
                    completeCountdown();
                }
            }, 100);
            
            startCountdownBtn.disabled = true;
            pauseCountdownBtn.disabled = false;
            hoursInput.disabled = true;
            minutesInput.disabled = true;
            secondsInput.disabled = true;
        }
    }
    
    function pauseCountdown() {
        if (countdownRunning) {
            countdownRunning = false;
            clearInterval(countdownInterval);
            
            startCountdownBtn.disabled = false;
            pauseCountdownBtn.disabled = true;
        }
    }
    
    function resetCountdown() {
        pauseCountdown();
        countdownTime = 0;
        countdownDisplay.textContent = '00:00:00';
        
        hoursInput.disabled = false;
        minutesInput.disabled = false;
        secondsInput.disabled = false;
    }
    
    function completeCountdown() {
        pauseCountdown();
        countdownDisplay.textContent = '00:00:00';
        alert('Countdown complete!');
        
        hoursInput.disabled = false;
        minutesInput.disabled = false;
        secondsInput.disabled = false;
    }
    
    // Event listeners for stopwatch
    startStopwatchBtn.addEventListener('click', startStopwatch);
    pauseStopwatchBtn.addEventListener('click', pauseStopwatch);
    resetStopwatchBtn.addEventListener('click', resetStopwatch);
    
    // Event listeners for countdown
    startCountdownBtn.addEventListener('click', startCountdown);
    pauseCountdownBtn.addEventListener('click', pauseCountdown);
    resetCountdownBtn.addEventListener('click', resetCountdown);
    
    // Input validation for countdown
    [hoursInput, minutesInput, secondsInput].forEach(input => {
        input.addEventListener('input', () => {
            let value = parseInt(input.value) || 0;
            
            // Apply min/max constraints
            if (input === hoursInput) {
                value = Math.min(99, Math.max(0, value));
            } else {
                value = Math.min(59, Math.max(0, value));
            }
            
            input.value = value;
        });
    });
});
