export class FunctionModel {
    
    public functionType: string;
    public T: number;
    public FHz: number;
    public Ts: number;
    public theta: number;
    public A: number;
  
    constructor(functionType:string, period:number, freqHz:number, samplingT :number, phaseOffset:number, amplitude:number) {
    
        this.functionType = functionType;
        this.T = period;
        this.FHz =  freqHz;
        this.Ts = samplingT;
        this.theta = phaseOffset;
        this.A = amplitude;

    }
  }
  