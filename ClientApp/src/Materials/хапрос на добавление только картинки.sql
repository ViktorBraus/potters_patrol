UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\����������.png', SINGLE_BLOB) AS image)
WHERE Result = '���������';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\��������.png', SINGLE_BLOB) AS image)
WHERE Result = '������';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\���������.png', SINGLE_BLOB) AS image)
WHERE Result = '��������';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\���������.png', SINGLE_BLOB) AS image)
WHERE Result = '���������';
UPDATE [Result details]
SET ResultImage = 
      (SELECT * FROM OPENROWSET(BULK 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\�������.png', SINGLE_BLOB) AS image)
WHERE Test_Id_=2;