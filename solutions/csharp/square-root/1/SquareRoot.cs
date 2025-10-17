public static class SquareRoot
{
    public static int Root(int number)
    {
        if (number == 0) return 0;
        
        int low = 1;
        int high = number;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int square = mid * mid;

            if (square == number)
                return mid;

            if (square < number)
                low = mid + 1;
            else
                high = mid -1 ;
        }

        throw new ArgumentException("Number is not a perfect square");
    }
}
