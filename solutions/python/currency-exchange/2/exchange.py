def exchange_money(budget, exchange_rate):
    """
    Calculates the amount of money in foreign currency based on an exchange_rate

    :param budget: float - amount of money you are planning to exchange.
    :param exchange_rate: float - unit value of the foreign currency.
    :return: float - exchanged value of the foreign currency you can receive.
    """

    return budget / exchange_rate


def get_change(budget, exchanging_value):
    """
    Calculates the amount of money that is left after an amount is exchanged

    :param budget: float - amount of money you own.
    :param exchanging_value: float - amount of your money you want to exchange now.
    :return: float - amount left of your starting currency after exchanging.
    """

    return budget - exchanging_value


def get_value_of_bills(denomination, number_of_bills):
    """
    Calculates the value in a currency of an amount of bills of a particular denomination

    :param denomination: int - the value of a bill.
    :param number_of_bills: int - amount of bills you received.
    :return: int - total value of bills you now have.
    """

    return number_of_bills * denomination


def get_number_of_bills(budget, denomination):
    """
    Calculates the number of bills that will be acquired of a certain denomination after an exchange

    :param budget: float - the amount of money you are planning to exchange.
    :param denomination: int - the value of a single bill.
    :return: int - number of bills after exchanging all your money.
    """

    return budget // denomination


def get_leftover_of_bills(budget, denomination):
    """
    Calculates the leftover of an exchange for bills of a denomination that the machine will not give back

    :param budget: float - the amount of money you are planning to exchange.
    :param denomination: int - the value of a single bill.
    :return: float - the leftover amount that cannot be exchanged given the current denomination.
    """

    return budget % denomination


def exchangeable_value(budget, exchange_rate, spread, denomination):
    """
    Calculates the exchange rate using a spread and gives back the amount of money in the currency that will be acquired keeping in mind the denomination of the bills and what the leftover that can't be exchanged

    :param budget: float - the amount of your money you are planning to exchange.
    :param exchange_rate: float - the unit value of the foreign currency.
    :param spread: int - percentage that is taken as an exchange fee.
    :param denomination: int - the value of a single bill.
    :return: int - maximum value you can get.
    """

    return get_value_of_bills(denomination, get_number_of_bills(exchange_money(budget, exchange_rate * (1 + spread / 100)), denomination))
