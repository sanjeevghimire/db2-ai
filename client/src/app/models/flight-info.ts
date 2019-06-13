export class FlightInfo {
  // opCarrier: string;
  // tailNum: string;
  // manufacturer: string;
  // model: string;
  // origin: string;
  // originCityName: string;
  // dest: string;
  // destCityName: string;
  // month: number;
  // dayOfWeek: number;
  // depTimeBlk: string;

  constructor(
    public opCarrier: string,
    public tailNum: string,
    public manufacturer: string,
    public flightModel: string,
    public origin: string,
    public originCityName: string,
    public dest: string,
    public destinationCityName: string,
    public month: number,
    public dayOfWeek: number,
    public depTimeBlk: string

  ) { }
}
