type ValidateionSuccess = {
  isValid: true;
  validatedValue: string;
};

type ValidationFailure = {
  isValid: false;
  errReason: string;
};

type ValidationResult = ValidateionSuccess | ValidationFailure;

function fetchValue(): ValidationResult {
  return {
    isValid: true,
    validatedValue: "get value succesful",
  };
}

const value = fetchValue();

function check(value: ValidationResult) {
  if (value.isValid) {
    console.log(value.validatedValue);
  }

  if (!value.isValid) {
    console.log(value.errReason);
  }
}

check(value);

let b: any;
function checka(a: any) {
  console.log(typeof a);

  if (a != null) {
    console.log("aaa", typeof a);
  }
}

checka(b);
