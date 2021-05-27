using System;

public class Book
{
    public int BookId { get; set; }
    public string Book_Name { get; set; }
    public byte[] Book_Image { get; set; }
    public string Book_description { get; set; }
    public string Book_url{ get; set; }
}
public class Movie
{
    public int MovieId { get; set; }
    public string Movie_Name { get; set; }
    public byte[] Movie_Image { get; set; }
    public string Movie_description { get; set; }
    public string Movie_url { get; set; }
}
public class Game
{
    public int GameId { get; set; }
    public string Game_Name { get; set; }
    public byte[] Game_Image { get; set; }
    public string Game_description { get; set; }
    public string Game_url { get; set; }
}


public class QuestionDetail
{
    public int Id { get; set; }
    public int Question_Id { get; set; }
    public string Question { get; set; }
}

public class Answers
{
    public int QuestionId { get; set; }
    public string Answer { get; set; }
}