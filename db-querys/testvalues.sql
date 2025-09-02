USE u854859500_m32;
INSERT INTO difficulty
	(difficulty) 
    VALUES 
    ("Principiante"), ("Intermedio"), ("Avanzado");
    
INSERT INTO category
	(category)
    VALUES
    ("Cocina Italiana"), ("Reposteria"), ("Cocina Mexicana"), ("Cocina Asiatica"), ("Panaderia"), ("Cocina Vegana");
    
INSERT INTO courses
(img, alt, id_difficulty, rating, name, author, description, time, sections, users, price, id_category)
VALUES
("https://molino32.com/files/test/italian.jpg", "menu italiano", 1, 4.5, "Cocina Italiana", "Chef Marco Rossi", "Cremoso risotto preparado con arroz arborio, champiñones salteados y un toque de aceite de trufa para un sabor auténtico italiano.", 4, 2, 10, 100, 1),
("https://molino32.com/files/test/repostery.jpg", "pasteles", 2, 4.5, "Reposteria", "Chef Marie Dubois", "Delicados macarons con una corteza crujiente y relleno suave, perfectos para perfeccionar tus técnicas de repostería avanzada.", 7, 4, 20, 200, 2),
("https://molino32.com/files/test/mexican.jpg", "menu mexicano", 3, 4.5, "Cocina Mexicana", "Chef Ana Garcia", "Tacos tradicionales con carne de cerdo marinada en achiote y cocida lentamente, servidos con cebolla morada encurtida.", 5, 6, 30, 150, 3),
("https://molino32.com/files/test/asiatic.jpg", "menu asiatico", 1, 4.5, "Cocina Asiatica", "Chef Marely Moctezuma", "Sopa japonesa con caldo de cerdo cocido por horas, fideos artesanales y toppings como huevo marinado y alga nori.", 3, 8, 40, 189.50, 4),
("https://molino32.com/files/test/bakery.jpeg", "panes", 2, 4.5, "Panaderia", "Chef Lia Sugey", "Pan dulce y esponjoso con mantequilla, ideal para desayunos o postres, horneado con técnicas tradicionales.", 6, 1, 50, 132.60, 5),
("https://molino32.com/files/test/vegan.png", "menu vegano", 3, 4.5, "Cocina Vegana", "Chef Luis Alberto", "Sabroso curry con garbanzos, leche de coco y especias aromáticas, ideal para una comida vegana nutritiva.", 2, 3, 60, 49, 6);