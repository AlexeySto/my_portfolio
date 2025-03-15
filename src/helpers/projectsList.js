import project01 from "./../img/projects/Project-1.webp";
import project011 from "./../img/projects/Project-1-1.webp";
import project012 from "./../img/projects/Project-1-2.webp";
import project013 from "./../img/projects/Project-1-3.webp";
import project014 from "./../img/projects/Project-1-4.webp";
import project015 from "./../img/projects/Project-1-5.webp";
import project016 from "./../img/projects/Project-1-6.webp";

import project02 from "./../img/projects/Project-2.webp";
import project021 from "./../img/projects/Project-2-1.webp";
import project022 from "./../img/projects/Project-2-2.webp";
import project023 from "./../img/projects/Project-2-3.webp";

import project03 from "./../img/projects/Project-3.webp";
import project031 from "./../img/projects/Project-3-1.webp";
import project032 from "./../img/projects/Project-3-2.webp";


const projects = [
	{
		id: '1',
		title: 'Messaging App',
		skills: 'React, Laravel, MySQL',
		img: project01,
		images: [project011, project012, project01, project013, project014, project015, project016],
		description: "Вэб приложение для обмена сообщениями в реальном времени. Это мой дипломный проект по специальности fullstack-разработчик. Клиентская часть приложения написана на React, а бэкенд на Laravel. Для хранения информации на сервере использовал MySQL. Реализован функционал обмена сообщениями с прикрепленными к ним медиафайлами. Создание групповых чатов.",
		gitHubLink: 'https://github.com/AlexeySto/messaging',
	},
	{
		id: '2',
		title: 'E-shop',
		skills: 'React, SASS',
		img: project02,
		images: [project021, project022, project023],
		description: "Онлайн магазин. Приложение создано на React В данном проекте реализован функционал поиска и сортировки товара в каталоге. Добавление и удаление товаров из корзины. Изменение количества заказываемых товаров и подсчет общей суммы заказа.",
		gitHubLink: 'https://github.com/AlexeySto/E-shop-react',
	},
	{
		id: '3',
		title: 'Portfolio Website',
		skills: 'React',
		img: project03,
		images: [project03, project031, project032],
		description: "Вэб страница моего портфолио. Написана на React.",
		gitHubLink: 'https://github.com/AlexeySto/My-portfolio',
	}
];

export {projects};