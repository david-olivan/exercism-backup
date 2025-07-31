#include "leap.h"

namespace leap {

bool is_leap_year(int year)
{
    if (year % 4 == 0 && year % 100 != 0)
    {
        return 1;
    }

    if (year % 100 == 0 && year % 400 == 0)
    {
        return 1;
    }

    return 0;
}

}  // namespace leap
