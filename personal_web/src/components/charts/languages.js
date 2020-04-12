import { Radar } from "vue-chartjs";

export default {
    extends: Radar,

    data: function () {
        return {
            chartdata: {
                labels: ["Python", "C++", "JavaScript", "Dart", "VUE", "HEXO", "Flutter"],
                datasets: [
                    {
                        label: 'Languages & FrameWorks',
                        backgroundColor: 'rgba(255, 0, 0, 0.4)',
                        pointBackgroundColor: 'rgba(255, 0, 0, 0.4)',
                        borderColor: 'rgba(255, 0, 0, 0.7)',
                        data: [90, 85, 85, 80, 85, 90, 80]
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