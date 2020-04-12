import { Radar } from "vue-chartjs";

export default {
    extends: Radar,

    data: function () {
        return {
            chartdata: {
                labels: ["GIT", "VIM", "Jetbrain", "VScode", "Docker"],
                datasets: [
                    {
                        label: 'Tools',
                        backgroundColor: 'rgba(255, 0, 0, 0.4)',
                        pointBackgroundColor: 'rgba(255, 0, 0, 0.4)',
                        borderColor: 'rgba(255, 0, 0, 0.7)',
                        data: [75, 85, 85, 90, 75]
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