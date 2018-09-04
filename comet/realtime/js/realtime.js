const ctx = document.getElementById('chart').getContext('2d');
const realtime = new Chart(ctx).Bar({
    labels: [],
    datasets: [{
        fillColor: 'rgba(0,60,100,1)',
        strokeColor: 'black',
        data: []
    }]
}, {
    responsive: true,
    barValueSpacing: 2
});

const ws = new WebSocket('wss://neto-api.herokuapp.com/realtime');
let isFirst = true;

ws.addEventListener('message', event => {
    const dataModify = JSON.parse(event.data);

    if (isFirst) {
        dataModify.forEach(data => realtime.addData([Number(data.online)], data.time));
        isFirst = false;
    } else {
        realtime.removeData();
        realtime.addData([Number(dataModify.online)], dataModify.time);
    }
});