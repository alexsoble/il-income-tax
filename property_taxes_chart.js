$(function () {

  $('#container').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Median real estate property taxes paid for housing units with mortgages (2013)'
    },
    subtitle: {
      text: 'Source: city-data.com'
    },
    xAxis: {
      categories: [
        'Winnetka, IL',
        'Chicago, IL',
        'Harvey, IL',
        'East St. Louis, IL',
      ],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Dollars'
      },
      labels: {
        overflow: 'justify',
        format: "${value}"
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false
        }
      },
      series: {
        allowPointSelect: false
      }
    },
    legend: {},
    tooltip: {
      formatter: function() {
        return '<b>Median property taxes:</b> $' + this.y;
      }
    },
    credits: { enabled: false },
    series: [
      {
        name: 'Median property taxes',
        color: '#E0CA3C',
        data: [
          10647,
          3645,
          2379,
          1134,
        ]
      }
    ]
  });
});
