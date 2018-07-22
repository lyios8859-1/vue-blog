<template>
	<div class="convert">
		<div class="clock">
			<div class="h" id="hour"></div>
			<div class="m" id="minute"></div>
			<div class="s" id="second"></div>
		</div>
	</div>
</template>

<script>
/*var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
// 开始定时器
var s = 0,m = 0, h = 0, ms = 0;
setInterval(function() {
		let date = new Date();  // 得到最新的时间
		ms = date.getMilliseconds(); // 现在的毫秒数
		s = date.getSeconds() + ms / 1000;  // 得到秒1.3s
		m = date.getMinutes() + s / 60;  // 得到的是分数45.6分钟
		h = date.getHours() % 12 + m / 60;
		// 旋转角度
		// 一圈360°,一共有60秒, 每秒6°现在是s秒
		// 变化旋转deg度
		minute.style.transform = "rotate("+ m*6 +"deg)";
		hour.style.transform = "rotate("+ h*30 +"deg)";
		second.style.transform = "rotate("+ s*6 +"deg)";

},100);*/
</script>


<style scoped>

	.clock {
		position: relative;
		width: 600px;
		height: 600px;
		background: url("../../assets/img/clock/clock.jpg") no-repeat;
	}
	.clock div {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.h {
		background: url("../../assets/img/clock/hours.png") no-repeat center center;
	}
	.m {
		background: url("../../assets/img/clock/minutes.png") no-repeat center center;
	}
	.s {
		background: url("../../assets/img/clock/seconds.png") no-repeat center center;
	}
</style>
