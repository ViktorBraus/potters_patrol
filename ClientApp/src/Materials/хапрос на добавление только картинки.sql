

UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\����������.png', SINGLE_BLOB) AS image)
WHERE Result = '���������';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\��������.png', SINGLE_BLOB) AS image)
WHERE Result = '������';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\���������.png', SINGLE_BLOB) AS image)
WHERE Result = '��������';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\���������.png', SINGLE_BLOB) AS image)
WHERE Result = '���������';
UPDATE Testresult
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\korol\source\repos\ViktorBraus\potters_patrol\ClientApp\src\images\patronus.jpg', SINGLE_BLOB) AS image)
WHERE Test_Id_=3;