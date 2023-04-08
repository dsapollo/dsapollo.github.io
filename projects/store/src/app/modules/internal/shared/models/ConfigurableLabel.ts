export interface ConfigurableLabel{
    [key:string]:ConfigurableLabelDetail;
}

export interface ConfigurableLabelDetail{
    id: number;
    name: string;
    active:boolean;
    desc:string;
    imageUrl:string;

}