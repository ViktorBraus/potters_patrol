

UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\Гриффиндор.png', SINGLE_BLOB) AS image)
WHERE Result = 'Ґрифіндор';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\Слизерин.png', SINGLE_BLOB) AS image)
WHERE Result = 'Слізерін';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\Пуффендуй.png', SINGLE_BLOB) AS image)
WHERE Result = 'Гафелпаф';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\Когтевран.png', SINGLE_BLOB) AS image)
WHERE Result = 'Рейвенкло';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\patronus.jpg', SINGLE_BLOB) AS image)
WHERE Test_Id_=3;