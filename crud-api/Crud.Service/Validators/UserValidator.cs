using Crud.Domain.Entities;
using FluentValidation;

namespace Crud.Service.Validators
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            RuleFor(c => c.Name)
                .NotEmpty().WithMessage("Please enter the name.")
                .NotNull().WithMessage("Please enter the name.");

            RuleFor(c => c.LastName)
               .NotEmpty().WithMessage("Please enter the lastname.")
               .NotNull().WithMessage("Please enter the lastname.");

            RuleFor(c => c.Email)
                .NotEmpty().WithMessage("Please enter the email.")
                .NotNull().WithMessage("Please enter the email.");

            RuleFor(c => c.Cpf)
                .NotEmpty().WithMessage("Please enter the CPF.")
                .NotNull().WithMessage("Please enter the CPF.");

            RuleFor(c => c.Phone)
                .NotEmpty().WithMessage("Please enter the phone.")
                .NotNull().WithMessage("Please enter the phone.");
        }
    }
}