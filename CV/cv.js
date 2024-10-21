document.addEventListener('DOMContentLoaded', function () {
  function updateTime() {
       const now = new Date();
       const utcTime = now.toUTCString().split(' ')[4];
       const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

       document.getElementById('utc-time').textContent = utcTime;
       document.getElementById('current-day').textContent = currentDay;
   }

    updateTime();
});