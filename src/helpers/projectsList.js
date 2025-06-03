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

import project04 from "./../img/projects/Project-4.webp";
import project041 from "./../img/projects/Project-4-1.webp";
import project042 from "./../img/projects/Project-4-2.webp";

import project05 from "./../img/projects/Project-5.webp";
import project051 from "./../img/projects/Project-5-1.webp";
import project052 from "./../img/projects/Project-5-2.webp";

import project06 from "./../img/projects/Project-6.webp";
import project061 from "./../img/projects/Project-6-1.webp";
import project062 from "./../img/projects/Project-6-2.webp";
import project063 from "./../img/projects/Project-6-3.webp";

import project07 from "./../img/projects/Project-7.webp";
import project071 from "./../img/projects/Project-7-1.webp";
import project072 from "./../img/projects/Project-7-2.webp";
import project073 from "./../img/projects/Project-7-3.webp";
import project074 from "./../img/projects/Project-7-4.webp";

import project08 from "./../img/projects/Project-8.webp";
import project081 from "./../img/projects/Project-8-1.webp";
import project082 from "./../img/projects/Project-8-2.webp";
import project083 from "./../img/projects/Project-8-3.webp";
import project084 from "./../img/projects/Project-8-4.webp";

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
		title: 'ERP system',
		skills: 'PHP, Yii2, JavaScript, MySQL, CSS, Bootstrap',
		img: project08,
		images: [project08, project081, project082, project083, project084],
		description: "Это модульная система управления предприятием, разработанная на базе фреймворка Yii2. Проект предоставляет набор инструментов для автоматизации основных бизнес-процессов. В текущей версии проекта представлены только те страны, которые были реализованы мной.",
		gitHubLink: 'https://github.com/AlexeySto/ERP-system',
	},
	{
		id: '3',
		title: 'User Manage',
		skills: 'PHP, Docker, Composer, CSS, Twig, MySQL',
		img: project07,
		images: [project071, project072, project073, project07, project074],
		description: "UserManage - веб-приложения для эффективного управления списком пользователей. Проект разработан на чистом PHP с использованием шаблонизатора Twig для создания динамичного и отзывчивого пользовательского интерфейса. Для хранения данных используется система управления базами данных MySQL.",
		gitHubLink: 'https://github.com/AlexeySto/UserManage',
	},
	{
		id: '4',
		title: 'E-shop',
		skills: 'React, SASS',
		img: project02,
		images: [project021, project022, project023],
		description: "Онлайн магазин. Приложение создано на React В данном проекте реализован функционал поиска и сортировки товара в каталоге. Добавление и удаление товаров из корзины. Изменение количества заказываемых товаров и подсчет общей суммы заказа.",
		gitHubLink: 'https://github.com/AlexeySto/E-shop-react',
	},
	{
		id: '5',
		title: 'Portfolio Website',
		skills: 'React',
		img: project03,
		images: [project03, project031, project032],
		description: "Вэб страница моего портфолио. Написана на React.",
		gitHubLink: 'https://github.com/AlexeySto/My-portfolio',
	},
	{
		id: '6',
		title: 'Airflow',
		skills: 'Python, Airflow',
		img: project04,
		images: [project04, project041, project042],
		description: "Система для автоматизации процесса сбора и обработки данных по прасписанию.",
		gitHubLink: 'https://github.com/AlexeySto/Airflow',
	},
	{
		id: '7',
		title: 'Data Collector',
		skills: 'Python, Scrapy',
		img: project05,
		images: [project05, project051, project052],
		description: "Система для автоматизации процесса сбора данных и их предварительной обработки. В данном случае парсинг фото и их ссылок.",
		gitHubLink: 'https://github.com/AlexeySto/DataCollector',
	},
	{
		id: '8',
		title: 'Note Master',
		skills: 'Python',
		img: project06,
		images: [project06, project061, project062, project063],
		description: "Консольное приложение для управления заметками с использованием паттерна MVP (Model-View-Presenter). Проект демонстрирует навыки в ООП, проектировании архитектуры и взаимодействии между компонентами.",
		gitHubLink: 'https://github.com/AlexeySto/NoteMaster',
	}
];

export {projects};