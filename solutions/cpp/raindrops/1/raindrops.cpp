#include "raindrops.h"

using namespace std;

namespace raindrops {

string convert(int number)
{
    string texto = "";
    if (number % 3 == 0) texto += "Pling";
    if (number % 5 == 0) texto += "Plang";
    if (number % 7 == 0) texto += "Plong";
    if (texto == "") texto = to_string(number);

    return texto;
}

}  // namespace raindrops
