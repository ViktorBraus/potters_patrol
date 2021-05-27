using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Models
{
    public partial class myTestDBContext : DbContext
    {
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<QuestionDetail> QuestionDetail { get; set; }
        public virtual DbSet<Answers> Answers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=VIKTOR_BRAUS\\SQLEXPRESS01;Database=Potters_Patrol;Trusted_Connection=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answers>()
                .HasNoKey();
        }
    }
}
