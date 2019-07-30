//안에서 클래스를 집어넣는 방식


$('#open-btn').click(function(){

	console.log($('#box')) //#box라는 친구의 제이쿼리 객체
	console.log($('#box')[0]) //#box라는 친구의 DOM 객체
	console.log($('#box')[0].className); //#box라는 친구의 DOM 객체 중 클래스 이름

//상자를 닫아보자
	if($('#box')[0].className.indexOf('open') !== -1){ //className이 open이 아니라면
		$('#box').removeClass('open');
		$('#open-btn').text('상자 열기')
		$('#box').hide();

	}else{

//상자를 열어보자
		$('#box').addClass('open');
		$('#open-btn').text('상자 닫기')
		$('box').show();
	}
})