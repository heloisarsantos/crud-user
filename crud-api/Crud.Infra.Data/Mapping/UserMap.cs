using Crud.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Crud.Infra.Data.Mapping
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");

            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.Name)
                .HasConversion(prop => prop.ToString(), prop => prop)
                .IsRequired()
                .HasColumnName("Name")
                .HasColumnType("varchar(100)");

            builder.Property(prop => prop.LastName)
              .HasConversion(prop => prop.ToString(), prop => prop)
              .IsRequired()
              .HasColumnName("LastName")
              .HasColumnType("varchar(100)");

            builder.Property(prop => prop.Email)
               .HasConversion(prop => prop.ToString(), prop => prop)
               .IsRequired()
               .HasColumnName("Email")
               .HasColumnType("varchar(100)");

            builder.Property(prop => prop.Cpf)
              .HasConversion(prop => prop.ToString(), prop => prop)
              .IsRequired()
              .HasColumnName("Cpf")
              .HasColumnType("varchar(14)");

            builder.Property(prop => prop.Phone)
              .HasConversion(prop => prop.ToString(), prop => prop)
              .IsRequired()
              .HasColumnName("Phone")
              .HasColumnType("varchar(20)");
        }
    }
}
