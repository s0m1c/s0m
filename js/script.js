function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});
$(document).ready(function(){
	$('.ua').click(function(){
		$('.ua').addClass('_active')
		$('.ru').removeClass('_active')
		$('.about-me__title').html('Про мене')
		$('.about-me__paragraph_1').html('Привіт! Моє псевдо - Сом, мені 17 років.')
		$('.about-me__paragraph_2').html("Почнімо з того, що я просто хотів якось описати себе, поділитись з тим, хто це читає, інформацією про себе. Проте проблема в тому, що я  не знаю що сказати про себе і тому я вирішив для початку просто попросити друзів дати опис в кілька слів.")
		$('.about-me__paragraph_3').html("")
		$('.about-me__paragraph_4').html('Знайомий з авторами Ютуб каналів Uncle Cublay та Alexso, стараюсь їм допомагати чим можу. В основному, це стосується їх діскорд серверів. Мені дуже заходить сидіти в дс і знаходити якісь нові фішки чи придумувати якісь оформлення використовуючи загальнодоступних ботів.')
		$('.about-me__paragraph_5').html('Люблю зависати в кубіках (майнкрафт): зараз граю на РП сервері ГПfree, який є проектом одного автора контенту на Ютубі - "Пятёрка". Також інколи захожу в локальну гру, правда набагато частіше граю на сервері.')
		$('.about-me__paragraph_6').html('')
		$('.about-me__paragraph_7').html('Не знаю що ще можна було б додати, тож на цьому все. Посилання автора цього сайту та мого крутого друга - <a href="https://fn9ne.github.io/socials" style="color: #ADAEAC; text-decoration: underline;" target="_blank">https://fn9ne.github.io/socials</a>.')
		$('.about-me__paragraph_8').html('Останнє оновлення 16.04.2021')
	});
	$('.ru').click(function(){
		$('.ru').addClass('_active')
		$('.ua').removeClass('_active')
		$('.about-me__title').html('Обо мне')
		$('.about-me__paragraph_1').html('Привет! Мое псевдо - Сом, мне 17 лет.')
		$('.about-me__paragraph_2').html("Начнем с того, что я хотел как-то описать себя, поделиться с тем, кто это читает, информацией о себе. Однако проблема в том, что я не знаю что сказать о себе и поэтому я решил для начала просто попросить друзей дать описание в несколько слов.")
		$('.about-me__paragraph_3').html("")
		$('.about-me__paragraph_4').html('Знаком с авторами Ютуб каналов Uncle Cublay и Alexso, стараюсь им помогать чем могу. В основном, это касается их дискорд серверов. Мне очень нравится сидеть в дс и находить какие-то новые фишки или придумывать какие оформления используя общедоступных ботов.')
		$('.about-me__paragraph_5').html('Люблю зависать в кубиках (майнкрафт): сейчас играю на РП сервере ГПfree, который является проектом одного автора контента на Ютубе - "Пятёрка". Также иногда захожу в локальную игру, правда гораздо чаще играю на сервере.')
		$('.about-me__paragraph_6').html('')
		$('.about-me__paragraph_7').html('Не знаю что еще можно было бы добавить, поэтому на этом все. Ссылка автора этого сайта и моего крутого друга - <a href = "https://fn9ne.github.io/socials" style = "color: #ADAEAC; text-decoration: underline;" target = "_blank"> https://fn9ne.github.io/socials </a>.')
		$('.about-me__paragraph_8').html('Последнее обновление 16.04.2021')
	});
})
