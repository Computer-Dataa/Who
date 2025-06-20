CREATE DATABASE career_test;
CREATE USER 'career_user'@'localhost' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON career_test.* TO 'career_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    text TEXT NOT NULL,
    yes_next INT,
    no_next INT,
    profession_id INT
);

CREATE TABLE professions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    learn_more TEXT
);

ALTER TABLE questions
ADD FOREIGN KEY (profession_id) REFERENCES professions(id);



INSERT INTO professions (name, description, learn_more) VALUES
('UX-дизайнер', 'Создает удобные интерфейсы...', 'https://ссылканапрофессиюUX.com/ux'),
('UI-дизайнер', 'Разрабатывает визуальный стиль...', 'https://ссылканапрофессиюUI.com/ui');
('Game-Dev', 'Разрабатывает игры...', 'https://ссылканапрофессиюGAME.com/ga');
('Front-End', 'Разрабатывает интерфейсы...', 'https://ссылканапрофессиюFront.com/fe');
('Back-End', 'Разрабатывает функционал...', 'https://ссылканапрофессиюBack.com/be');
('Dev-Ops', 'Разрабатывает коммуникацию...', 'https://ссылканапрофессиюOps.com/do');
('AI-Dev', 'Разрабатывает нейросети...', 'https://ссылканапрофессиюAI.com/ai');
('Prj-Man', 'Разрабатывает структуру...', 'https://ссылканапрофессиюPM.com/pm');
('QA', 'Тестирует продукт...', 'https://ссылканапрофессиюQa.com/qa');
('Data-Sci', 'Анализирует данные...', 'https://ссылканапрофессиюDs.com/ds');

INSERT INTO questions (text, yes_next, no_next, profession_id) VALUES
('Вам нравится работать с визуальным оформлением?', 2, 10, NULL),
('Вам интересно разрабатывать интерфейсы для сайтов и приложений?', 3, 7, NULL),
('Вы внимательно следите за последними трендами в дизайне?', 4, 7, NULL),
('Вам нравится создавать прототипы и макеты?', 5, 7, NULL),
('Вам нравится работать с людьми, вы понимаете потребности пользователей?', NULL, NULL, 1);
('Вам нравится создавать игры или работать с игровыми механиками?', 7, 10, NULL),
('Вам нравится изучать, как работают алгоритмы и механики внутри игр?', 8, 10, NULL),
('Вы любите работать с графикой, анимацией или 3D-моделями?', 9, 9, NULL),
('Вы хотите работать с игровыми движками, такими как Unity или Unreal Engine?', NULL, 10, 1),
('Вам нравится работать с кодом, чтобы создавать веб-страницы?', 11, 15, NULL);
('Вам нравится разрабатывать пользовательские интерфейсы для сайтов?', 12, 13, NULL),
('Вы предпочитаете работать с JavaScript, HTML, CSS и другими технологиями для создания интерфейсов?', NULL, 13, 1),
(' Вы интересуетесь обработкой данных на серверной стороне?', 14, 15, NULL),
('Вам нравится работать с базами данных, серверным кодом и API?', NULL, 15, 1),
('Вам нравится работать с инфраструктурой и автоматизацией процессов?', 16, 20, NULL);
('Вы хотите автоматизировать развертывание и настройку серверов?', 17, 18, NULL),
('Вам нравится работать с облачными сервисами и контейнерами?', 18, 18, NULL),
('Вы хотите работать с мониторингом и поддержанием систем?', NULL, 20, 1),
('Вы хотите разрабатывать алгоритмы для нейронных сетей и машинного обучения?', 20, 23, NULL),
('Вам увлекает статистика и математические модели?', 21, 22, NULL),
('Вам нравится работать с большими данными и анализировать их?', 22, 23, NULL),
('Вы хотите разрабатывать алгоритмы для нейронных сетей и машинного обучения?', NULL, 23, 1),
('Вам нравится работать с командами и управлять проектами?', 24, 28, NULL),
('Вы умеете организовывать задачи и следить за сроками?', 25, 27, NULL),
('Вы хотите работать с различными проектами, от разработки до маркетинга?', 26, 27, NULL),
('Вам нравится взаимодействовать с клиентами и понимать их потребности?', NULL, 27, 1),
('Вы готовы решать конфликты и работать в условиях стресса?', NULL, 28, 1),
('Вам нравится проверять программное обеспечение на наличие ошибок?', 29, 33, NULL),
('Вы любите работать с тестами, проверками и отчетностью?', 30, 32, NULL),
('Вам нравится работать с автоматизированными тестами и скриптами?', NULL, 31, 1),
('Вы предпочитаете проводить ручное тестирование и работать с интерфейсом?', NULL, 33, 1),
('Вам нравится работать с большими объемами данных и их анализом?', 33, 36, NULL),
('Вы увлекаетесь статистикой, машинным обучением и анализом данных?', 34, 35, NULL),
('Вы хотите разрабатывать модели и прогнозировать будущее с помощью данных?', NULL, 35, 1),
('Вам нравится исследовать данные и искать скрытые закономерности?', NULL, 36, 1),
('Вы готовы работать с большими данными и сложными вычислениями?', NULL, NULL, 1),
('Вам интересно работать с нейронными сетями и глубинным обучением?', 38, 40, NULL),
('Вы хотите разрабатывать алгоритмы для обработки изображений или видео?', 39, 40, NULL),
('Вам нравится работать с алгоритмами для распознавания речи или текста?', NULL, 40, 1),
('Вы хотите разрабатывать системы, которые могут принимать решения на основе данных?', NULL, NULL, 1),
('Вы хотите работать с играми, но не хотите заниматься кодированием?', 42, 45, NULL),
('Вы хотите заниматься разработкой игровых уровней или дизайном уровней?', NULL, 45, 1),
('Вам интересно работать с игровыми искусственными интеллектами?', 44, 45, NULL),
('Вам нравится разрабатывать поведение персонажей или врагов в играх?', NULL, 45, 1),
('Вам интересно работать с графикой, анимациями и визуальными эффектами в играх?', NULL, 50, 1),
('Вы хотите работать с серверной частью, оптимизацией и архитектурой приложений?', 47, 50, NULL),
('Вы хотите работать с фреймворками и архитектурами серверных приложений?', 48, 50, NULL),
('Вам интересно заниматься архитектурой баз данных и системами хранения данных?', NULL, 50, 1),
('Вам нравится заниматься интеграцией различных сервисов и решений?', 50, 50, NULL),
('Вы хотите работать с большими данными, вычислениями или научными проектами?', NULL, NULL, 1),