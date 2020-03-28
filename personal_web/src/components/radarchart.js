import { Radar } from "vue-chartjs";

export default {
    extends: Radar,

    data: function () {
        return {
            chartdata: {
                labels: ["Haha", "Swimming", "Eating", "Cycling"],
                datasets: [
                    {
                        label: 'Languages & Frameworks',
                        backgroundColor: 'rgba(255, 0, 0, 0.4)',
                        pointBackgroundColor: 'rgba(255, 0, 0, 0.4)',
                        borderColor: 'rgba(255, 0, 0, 0.7)',
                        data: [80, 90, 90, 70]
                    }
                ]
            },
            options: {
                scale: {
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        };
    },
    mounted() {
        this.renderChart(this.chartdata, this.options);
    }
};