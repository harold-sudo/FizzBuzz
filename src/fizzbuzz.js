function fizzbuzz(a) {
    if (a % 3 === 0)
    {
        return "Fizz";
    }
    else if (a % 5 === 0)
    {
        return "Buzz";
    }
    return a + "";
}

export default fizzbuzz;