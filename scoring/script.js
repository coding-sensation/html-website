// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
    colors: ['#80ffaa', '#ffad99'],
  series: [
    {
      name: "Tasks On Time",
      data: [35, 41, 36],
    },
    {
      name: "Late Tasks",
      data: [13, 34, 23],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },

  },
  
  grid: {
    show: true,
    borderColor: 'rgba(0,0,0,0.2)',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: true
        }
    },   
    yaxis: {
        lines: {
            show: true
        }
    },  
    row: {
        colors: undefined,
        opacity: 0.5
    },  
    column: {
        colors: undefined,
        opacity: 0.5
    },  
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },  
    labels: {
    enabled: true,
  },
},

  plotOptions: {
    heatmap: {
      radius: 30,
    },
    bar: {
      horizontal: false,
      columnWidth: "75%",
      endingShape: "rounded",
       
    },
  
  },
  dataLabels: {
    enabled: false,
  },
  // stroke: {
  //   show: true,
  // width:20,
  //   colors: ["transparent"],
  // },
  xaxis: {
    lines: {
      show: true
    } ,
    categories: ["February", "March", "April"],
  },
 
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  val;
      },
    },
  },
};



 var pie_options = {
   series: [20, 50, 30],
   colors:['#ffad99','#78aeff', '#80ffaa'],
        chart: {
          width: 380,
          type: 'pie',
   },
        fill: {
  colors: ['#ffad99','#78aeff', '#80ffaa']
},
        labels: ['Posts', 'Quizzes', 'Courses'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          },
     
   }],
dataLabels: {
    enabled: false,
  },
        };

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();




var pie = new ApexCharts(document.querySelector("#apex2"), pie_options);
pie.render();
// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}
