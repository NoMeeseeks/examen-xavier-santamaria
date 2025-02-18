export interface Collection {
  version:string;
  href:string;
  items:Items[];
}

export interface Items{
  href:string;
  data:Data[];
  links:Links[];
}

export interface Data{
  center:string;
  date_created:string;
  description:string;
  description_508:string;
  keywords:string[];
  media_type:string;
  nasa_id:string;
  secondary_creator:string;
  title:string;
}

export interface Links{
  href:string;
  rel:string;
  render:string;
  width:number;
  size:number;
  height:number;
}
