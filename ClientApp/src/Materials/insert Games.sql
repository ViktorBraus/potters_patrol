INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 1,'���� ������ � ������������ ����� (���)','Harry Potter and the Philosopher"s Stone (���. ���� ������ � Գ���������� �����) � 
�������, ���������� ��������� KnowWonder (����� ��� ��), Argonaut Games (����� ��� PlayStation), 
Warthog Games (���� ��� GameCube, Xbox, PlayStation 2) � Griptonite Games (���� ��� Game Boy Advance � Game Boy Color); 
����� ���� �������� ����� ��� �������� ��������. �������� ��� � ������� Electronic Arts ������ � Warner Bros. 
Interactive Entertainment.',BulkColumn
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp1-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 2,'���� ������ � ����� ������ (���)','����� ������ � ����� ������ - ����� ��� ��� ����� ������. 
���������� ��� PlayStation, PlayStation 2, Nintendo Game Cube, Nintendo Game Boy Color � Game Boy Advance � ��� ������������ ����"�����. 
�����, �������, ������ ����������� ��� �������� ������ ��������. ��� ������� ���������� ��, 
�������� � ������, ����� ���� � ������������ ������� � �������� � ���������. 
������� ����-������ �������� �� PlayStation 1 � Game Boy Color ��� ���.
�������, �� ��� ��� ����� �������� ������������ �� ����� � ��������, � � ����.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp2-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 3,'���� ������ � �"����� �������� (���)','����� ������ � �"����� �������� � ����� ��� ��� 
���� �������, ��������� �� ����� ��. �. ������ ����� ������ � �"����� �������� 
� ������ ��������� � ������ ������������ ������. 
��� ����� ������� ��������� (������������ ����"����, 
����� ������, ��������� ������) ��� ����������� ����������� ������ � ��������.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp3-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 4,'���� ������ � ����� ����� (���)','Harry Potter and the Goblet of Fire - 
��������� ����� � ��� ���� ��� ���� �������. 
������ ��� ����������� �� ������ ������ ��������� Warner Brothers, 
����������� �� �������� ���� ��. �. ������. ����, ��� � ������� ������������, 
� ������ ������� �������� �� �������� ������ ������, 
��������� �� ������ �������� ������ � ������ � ��������� ������ � ������ �����������.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp4-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image)  
SELECT 5,'���� ������ � ����� ������ (���)','��� ����� ������ � ����� ������ 
���� ���������� ��������� ���䳺� Electronic Arts - EA"s UK Studio, 
��� ���������� � �������� ���� ���. ������ ��� ���� Electronic Arts.
��� ���������� ��� �������� Nintendo Wii �, PlayStation 3, Xbox 360�, 
PlayStation 2, PSP, Nintendo DS�, Game Boy Advance, � ����� ������������ ����"�����.
����� ��� ���������� �� ���� ��. �. ���� ����� ������ � ����� ������, 
� ����� ������������ �����.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp5-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 6,'���� ������ � ����������� ����� (���)','���� ������ � ����������� ����� � ����� ��� �� ��� ��� ���� �������. 
��� ���� ���������� EA Bright Light Studio � ������ Electronic Arts. 
�������� ��� ����������� ��������� ����� 2008 ����, 
��� ������� ����"��� ������������ ������ ���� ���������� �� 17 ����� 2009 ����, 
�� � ������ ��� ���� ����� ���������� ������ �� ���� ����. 
��� ������ � ��� 30 ������ 2009, � ��� ��� ������ �� ������� 3 ����� 2009 ����. 
��� �������� �� ������� ���������: Mac OS X, Microsoft Windows, Nintendo DS, PlayStation 2, 
PlayStation 3, PlayStation Portable, Wii, Xbox 360, � ����� �� �������� �������.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp6-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 7,'���� ������ � ��������� ����⳿: ������� ����� (���)','Harry Potter 
and the Deathly Hallows: Part I (���. ����� ������ � ���� �����: ������� I�) - ����"������ ���, 
���������� ���䳺� EA Bright Light � ������ ������� Electronic Arts; 
����� ��� ���������� �� ����� ������������ ������ ����� ������ � ���� ����������. 
������ 16 ��������� 2010 ���� � ������ ��� ������������� ����"�����, PlayStation 3, Xbox 360, 
Wii, Nintendo DS � �������� ��������.
������ ������������ ������, ��� ������� �� �� �������. 
����������� - Harry Potter and the Deathly Hallows: Part II - 
���� �������� ������������ 13 ����� 2011 ����.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp7-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 8,'���� ������ � ��������� ����⳿ : ������� ����� (���)','Harry Potter and the Deathly 
Hallows: Part II (���. ����� ������ � ���� �����: ������� II�) - ����"������ ���, 
���������� ���䳺� EA Bright Light � ������ ������� Electronic Arts; 
����������� Harry Potter and the Deathly Hallows: Part I.
����� Harry Potter and the Deathly Hallows: 
Part II ��� ����������� �� ����"��� ������������ ������, ��� �������� 13 ����� 2011, 
� ���� ����������� �� ������� ����� ������.
��� �������� �� ������������� ����"����, ������� �������� PlayStation 3, Xbox 360, Wii, 
Nintendo DS � �������� ���������.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp7.2-game.jpg', Single_Blob) as image
INSERT INTO Potters_Patrol.dbo.Games(GameId, Game_Name, Game_Description,Game_Image) 
SELECT 9,'���� ������ : �������� ���� � ������ (���)','���� ������: �������� ���� � ������ (����. Harry Potter: Quidditch World Cup) � ����"������ ���, 
���������� Magic Pockets ������ � Electronic Arts � ������ Electronic Arts. 
��� � ���������� ����������� �������� ��� ����� (����. quidditch), ��� ��������� � �������� 
��� ���� �������.
��� ���������� ��� ������� �������� Xbox, PlayStation 2, Nintendo GameCube, Game Boy Advance, 
� ����� ������������ ����"�����.',BulkColumn 
FROM Openrowset( Bulk 'C:\Users\MSI\Desktop\PottersPatrol\ClientApp\src\images\Hp8-game.png', Single_Blob) as image


