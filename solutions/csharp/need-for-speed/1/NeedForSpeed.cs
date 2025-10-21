class RemoteControlCar
{
    private readonly int _speed;
    private readonly int _batteryDrain;
    private int _metersDriven;
    private int _battery = 100;
        
    public RemoteControlCar(int speed, int batteryDrain)
    {
        _speed = speed;
        _batteryDrain = batteryDrain;
    }

    public bool BatteryDrained() => _battery < _batteryDrain;

    public int DistanceDriven() => _metersDriven;

    public void Drive()
    {
        if (!BatteryDrained()) {
            _metersDriven += _speed;
            _battery -= _batteryDrain;
        }
    }

    public static RemoteControlCar Nitro() => new(50, 4);
}

class RaceTrack
{
    private readonly int _distance;
    
    public RaceTrack(int distance)
    {
        _distance = distance;
    }

    public bool TryFinishTrack(RemoteControlCar car)
    {
        while (!car.BatteryDrained() && car.DistanceDriven() < _distance) {
            car.Drive();
        }
        return car.DistanceDriven() >= _distance;
    }
}
