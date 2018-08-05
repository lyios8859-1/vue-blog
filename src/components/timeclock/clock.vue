<template>
    <div class="block">
        <div id="calendarmain">
            <div id="title"> 
                <a class="selectBtn month" href="javascript:void(0);" @click="CalculateLastMonthDays">&lt;</a>
                <a class="selectBtn selectYear" href="javascript:void(0);" @click="CreateSelectYear(showYearStart)">2014年</a>
                <a class="selectBtn selectMonth" href="javascript:void(0);" @click="CreateSelectMonth">6月</a>
                <a class="selectBtn nextMonth" href="javascript:void(0);" @click="CalculateNextMonthDays">&gt;</a>
                <a class="selectBtn currentDay" href="javascript:void(0);" @click="CreateCurrentCalendar(0,0,0)">今天</a>
            </div>
            <div id="context">
                <div class="week">
                    <h3> 一 </h3>
                    <h3> 二 </h3>
                    <h3> 三 </h3>
                    <h3> 四 </h3>
                    <h3> 五 </h3>               
                    <h3> 六 </h3>
                    <h3> 日 </h3>
                </div>
                <div id="center">
                    <div id="centerMain">
                        <div id="selectYearDiv"></div>
                        <div id="centercalendarmain">
                            <div id="container"></div>
                        </div>
                        <div id="selectMonthDiv"></div>
                    </div>
                </div>
            <div id="foots"><span id="footNow">19:14:34</span></div>
        </div>
    </div>
  </div>
</template>

<style>
    #calendarmain {
        width: 300px;
        height: 300px;
        border: 1px solid #ccc;
        margin: 0 auto;
    }
    #title {
        width: 100%;
        height: 30px;
        background-color: #b9121b;
    }
    .selectBtn {
        font-weight: 900;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        padding: 7px 10px 6px 10px;
    }
    .selectBtn:hover {
        background-color: #1d953f;
    }
    .selectYear {
        float: left;
        margin-left: 50px;
        position: absolute;
    }
    .selectMonth {
        float: left;
        margin-left: 120px;
        position: absolute;
    }
    .month {
        float: left;
        position: absolute;
    }
    .nextMonth {
        float: right;
    }
    .currentDay {
        float: right;
    }
    #context {
        background-color: #fff;
        width: 100%;
    }
    .week {
        width: 100%;
        height: 30px;
    }
    .week>h3 {
        float: left;
        color: #808080;
        text-align: center;
        margin: 0;
        padding: 0;
        margin-top: 5px;
        font-size: 16px;
    }
    .dayItem {
        float: left;
    }
    .lastItem {
        color: #d1c7b7 !important;
    }
    .item {
        color: #333;
        float: left;
        text-align: center;
        cursor: pointer;
        margin: 0;
        font-family: "微软雅黑";
        font-size: 13px;
    }
    .item:hover {
        color: #b9121b;
    }
    .currentItem>a {
        background-color: #b9121b;
        width: 25px;
        line-height: 25px;
        float: left;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        color: #fff;
    }
    #foots {
        width: 100%;
        height: 35px;
        background-color: #fff;
        border-top: 1px solid #ccc;
        margin-top: -1px;
    }
    #footNow {
        float: right;
        margin: 10px 10px 0 0;
        color: #009ad6;
        font-family: "微软雅黑";
    }
    #container {
        overflow: hidden;
        float: left;
    }
    #center {
        width: 100%;
        overflow: hidden;
    }
    #centerMain {
        width: 300%;
        margin-left: -100%;
    }
    #selectYearDiv {
        float: left;
        background-color: #fff;
    }
    #selectYearDiv>div {
        float: left;
        text-align: center;
        font-family: "微软雅黑";
        font-size: 16px;
        border: 1px solid #ccc;
        margin-left: -1px;
        margin-top: -1px;
        cursor: pointer;
        color: #909090;
    }
    .currentYearSd, .currentMontSd {
        color: #ff4400 !important;
    }
    #selectMonthDiv {
        float: left;
        background-color: #fff;
    }
    #selectMonthDiv>div {
        color: #909090;
        float: left;
        text-align: center;
        font-family: "微软雅黑";
        font-size: 16px;
        border: 1px solid #ccc;
        margin-left: -1px;
        margin-top: -1px;
        cursor: pointer;
    }
    #selectYearDiv>div:hover, #selectMonthDiv>div:hover {
        background-color: #efefef;
    }
    #centercalendarmain {
        float: left;
    }
</style>

<script>
export default {
    name: 'Block',
    data(){
        return{
            currentYear: 0,
            currentMonth: 0,
            isRunning: false,
            showYearStart:2009,
            tag:0
        }
    },
    mounted() {
        now: {
            var self = this;
            self.initialize();
        }

    },
    methods: {
        initialize() {
            var self = this;
            var  $calendarItem = self.CreateCalendar(0, 0, 0);
            $("#container").append($calendarItem);

            $("#context").css("height", $("#calendarmain").height() - 65 + "px");
            $("#center").css("height", $("#context").height() - 30 + "px");
            $("#selectYearDiv").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");
            $("#selectMonthDiv").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");
            $("#centercalendarmain").css("height", $("#context").height() - 30 + "px").css("width", $("#context").width() + "px");

            $calendarItem.css("height", $("#context").height() - 30 + "px"); //.css("visibility","hidden");
            $("#container").css("height", "0px").css("width", "0px").css("margin-left", $("#context").width() / 2 + "px").css("margin-top", ($("#context").height() - 30) / 2 + "px");
            $("#container").animate({
                width: $("#context").width() + "px",
                height: ($("#context").height() - 30) * 2 + "px",
                marginLeft: "0px",
                marginTop: "0px"
            }, 300, function() {
                $calendarItem.css("visibility", "visible");
            });
            $(".dayItem").css("width", $("#context").width() + "px");
            var itemPaddintTop = $(".dayItem").height() / 6;
            $(".item").css({
                "width": $(".week").width() / 7 + "px",
                "line-height": itemPaddintTop + "px",
                "height": itemPaddintTop + "px"
            });
            $(".currentItem>a").css("margin-left", ($(".item").width() - 25) / 2 + "px").css("margin-top", ($(".item").height() - 25) / 2 + "px");
            $(".week>h3").css("width", $(".week").width() / 7 + "px");
           self.RunningTime();
        },
        CreateSelectYear(showYearStart) {
            var self = this;
            self.showYearStart=showYearStart;
            $(".currentDay").show();
            $("#selectYearDiv").children().remove();
            var yearindex = 0;
            for (var i = showYearStart; i < showYearStart+12; i++) {
                yearindex++;
                if(i==showYearStart){
                   var  $last=$("<div>往前</div>");
                    $("#selectYearDiv").append($last);
                    $last.click(function(){
                        self.CreateSelectYear(self.showYearStart-10);
                    });
                    continue;
                }
                var $next = null;
                if(i==showYearStart+11){
                    $next=$("<div>往后</div>");
                    $("#selectYearDiv").append($next);
                    $next.click(function(){
                        self.CreateSelectYear(self.showYearStart+10);
                    });
                    continue;
                }
                 var $yearItem= null;
                if (i == self.currentYear) {
                    $yearItem=$("<div class=\"currentYearSd\" id=\"" + yearindex + "\">" + i + "</div>")

                } else {
                        $yearItem=$("<div id=\"" + yearindex + "\">" + i + "</div>");
                }
                $("#selectYearDiv").append($yearItem);
                $yearItem.click(function(){
                   var $calendarItem=self.CreateCalendar(Number($(this).html()),1,1);
                    $("#container").append($calendarItem);
                    self.CSS();
                    self.isRunning = true;
                    $($("#container").find(".dayItem")[0]).animate({
                        height: "0px"
                    }, 300, function() {
                        $(this).remove();
                        self.isRunning = false;
                    });
                    $("#centerMain").animate({
                        marginLeft: -$("#center").width() + "px"
                    }, 500);
                });
                if (yearindex == 1 || yearindex == 5 || yearindex == 9) $("#selectYearDiv").find("#" + yearindex).css("border-left-color", "#fff");
                if (yearindex == 4 || yearindex == 8 || yearindex == 12) $("#selectYearDiv").find("#" + yearindex).css("border-right-color", "#fff");

            }
            $("#selectYearDiv>div").css("width", ($("#center").width() - 4) / 4 + "px").css("line-height", ($("#center").height() - 4) / 3 + "px");
            $("#centerMain").animate({
                marginLeft: "0px"
            }, 300);
        },
        CreateSelectMonth() {
            var self = this;
            $(".currentDay").show();
            $("#selectMonthDiv").children().remove();
            var $monthItem = null;
            for (var i = 1; i < 13; i++) {
                if (i == self.currentMonth) {
                    $monthItem =$("<div class=\"currentMontSd\" id=\"" + i + "\">" + i + "月</div>");
                } else {
                  $monthItem=$("<div id=\"" + i + "\">" + i + "月</div>");
                }
                $("#selectMonthDiv").append($monthItem);
                $monthItem.click(function(){
                    var $calendarItem=self.CreateCalendar(self.currentYear,Number($(this).attr("id")),1);
                    $("#container").append($calendarItem);
                    self.CSS();
                    self.isRunning = true;
                    $($("#container").find(".dayItem")[0]).animate({
                        height: "0px"
                    }, 300, function() {
                        $($("#container").find(".dayItem")[0]).remove();
                        self.isRunning = false;
                    });
                    $("#centerMain").animate({
                    marginLeft: -$("#center").width() + "px"
                }, 500);
                });
                if (i == 1 || i == 5 || i == 9) $("#selectMonthDiv").find("#" + i).css("border-left-color", "#fff");
                if (i == 4 || i == 8 || i == 12) $("#selectMonthDiv").find("#" + i).css("border-right-color", "#fff");
            }
            $("#selectMonthDiv>div").css("width", ($("#center").width() - 4) / 4 + "px").css("line-height", ($("#center").height() - 4) / 3 + "px");
            $("#centerMain").animate({
                marginLeft: -$("#center").width() * 2 + "px"
            }, 300);
        },
        IsRuiYear(aDate) {
            return (0 == aDate % 4 && (aDate % 100 != 0 || aDate % 400 == 0));
        },
        CalculateWeek(y, m, d) {
            var arr = "7123456".split("");
            //with(document.all) {
                var vYear = parseInt(y, 10);
                var vMonth = parseInt(m, 10);       
                var vDay = parseInt(d, 10);
            //}
            var week =arr[new Date(y,m-1,vDay).getDay()];
            return week;
        },
        CalculateMonthDays(m, y) {
            var self = this;
            var mDay = 0;
            if (m == 0 || m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
                mDay = 31;
            } else {
                if (m == 2) {
                    //判断是否为芮年
                    var isRn = self.IsRuiYear(y);
                    if (isRn == true) {
                        mDay = 29;
                    } else {
                        mDay = 28;
                    }
                } else {
                    mDay = 30;
                }
            }
            return mDay;
        },
        CreateCalendar(y, m, d) {
            var self = this;
            var $dayItem = $('<div class="dayItem"></div>');
            //获取当前月份的天数
            var nowDate = new Date();
            if(y==nowDate.getFullYear()&&m==nowDate.getMonth()+1||(y==0&&m==0))
                $(".currentDay").hide();
            var nowYear = y == 0 ? nowDate.getFullYear() : y;
            self.currentYear = nowYear;
            var nowMonth = m == 0 ? nowDate.getMonth() + 1 : m;
            self.currentMonth = nowMonth;
            var nowDay = d == 0 ? nowDate.getDate() : d;
            $(".selectYear").html(nowYear + "年");
            $(".selectMonth").html(nowMonth + "月");
            var nowDaysNub = self.CalculateMonthDays(nowMonth, nowYear);
            //获取当月第一天是星期几
            //var weekDate = new Date(nowYear+"-"+nowMonth+"-"+1);
            //alert(weekDate.getDay());
            var nowWeek = parseInt(self.CalculateWeek(nowYear, nowMonth, 1));
            //nowWeek=weekDate.getDay()==0?7:weekDate.getDay();
            //var nowWeek=weekDate.getDay();
            //获取上个月的天数
            var lastMonthDaysNub = self.CalculateMonthDays((nowMonth - 1), nowYear);

            if (nowWeek != 0) {
                //生成上月剩下的日期
                for (var i = (lastMonthDaysNub - (nowWeek - 1)); i < lastMonthDaysNub; i++) {
                    $dayItem.append(`<div class="item lastItem"><a>${(i + 1)}</a></div>`);
                }
            }

            //生成当月的日期
            for (var i = 0; i < nowDaysNub; i++) {
                if (i == (nowDay - 1)) {
                    $dayItem.append(`<div class="item currentItem"><a>${(i + 1)}</a></div>`);
                } else {
                    $dayItem.append(`<div class="item"><a>${(i + 1)}</a></div>`);
                }
            }

            //获取总共已经生成的天数
            var hasCreateDaysNub = nowWeek + nowDaysNub;
            //如果小于42，往下个月推算
            if (hasCreateDaysNub < 42) {
                for (var i = 0; i <= (42 - hasCreateDaysNub); i++) {
                    $dayItem.append(`<div class="item lastItem"><a>${(i + 1)}</a></div>`);
                }
            }
            return $dayItem;
        },
        CSS() {
            var itemPaddintTop = $(".dayItem").height() / 6;
            $(".item").css({
                "width": $(".week").width() / 7 + "px",
                "line-height": itemPaddintTop + "px",
                "height": itemPaddintTop + "px"
            });
            $(".currentItem>a").css("margin-left", ($(".item").width() - 25) / 2 + "px").css("margin-top", ($(".item").height() - 25) / 2 + "px");
        },
        CalculateNextMonthDays() {
            var self = this;
            if (self.isRunning == false) {
                $(".currentDay").show();
                var m = self.currentMonth == 12 ? 1 : self.currentMonth + 1;
                var y = self.currentMonth == 12 ? (self.currentYear + 1) : self.currentYear;
                var d = 0;
                var nowDate = new Date();
                if (y == nowDate.getFullYear() && m == nowDate.getMonth() + 1) {
                    d = nowDate.getDate();
                }  else {
                    d = 1;
                }
                var $calendarItem = self.CreateCalendar(y, m, d);
                $("#container").append($calendarItem);

                self.CSS();
                self.isRunning = true;
                $($("#container").find(".dayItem")[0]).animate({
                    height: "0px"
                }, 300, function() {
                    $($("#container").find(".dayItem")[0]).remove();
                    self.isRunning = false;
                });
            }
        },
        CalculateLastMonthDays() {
            var self = this;
            if (self.isRunning == false) {
                $(".currentDay").show();
                var nowDate = new Date();                   
                var m = self.currentMonth == 1 ? 12 : self.currentMonth - 1;
                var y = self.currentMonth == 1 ? (self.currentYear - 1) : self.currentYear;
                var d = 0;

                if (y == nowDate.getFullYear() && m == nowDate.getMonth() + 1) d = nowDate.getDate();
                else d = 1;
                var $calendarItem = self.CreateCalendar(y, m, d);
                $("#container").append($calendarItem);
                var itemPaddintTop = $(".dayItem").height() / 6;
                self.CSS();
                self.isRunning = true;
                $($("#container").find(".dayItem")[0]).animate({
                    height: "0px"
                }, 300, function() {
                    $($("#container").find(".dayItem")[0]).remove();
                    self.isRunning = false;
                });
            }
        },
        CreateCurrentCalendar() {
            var self = this;
            if (self.isRunning == false) {
                $(".currentDay").hide();
                var $calendarItem = self.CreateCalendar(0, 0, 0);
                $("#container").append($calendarItem);
                self.isRunning = true;
                $($("#container").find(".dayItem")[0]).animate({
                    height: "0px"
                }, 300, function() {
                    $($("#container").find(".dayItem")[0]).remove();
                    self.isRunning = false;
                });
                self.CSS();
                $("#centerMain").animate({
                    marginLeft: -$("#center").width() + "px"
                }, 500);
            }
        },
        RunningTime() {
            var mTiming = setInterval(function() {
                var nowDate = new Date();
                var h=nowDate.getHours()<10?"0"+nowDate.getHours():nowDate.getHours();
                var m=nowDate.getMinutes()<10?"0"+nowDate.getMinutes():nowDate.getMinutes();
                var s=nowDate.getSeconds()<10?"0"+nowDate.getSeconds():nowDate.getSeconds();
                var nowTime = h + ":" + m + ":" + s;
                $("#footNow").html(nowTime);
            }, 1000);
        }
     }
}
</script>
