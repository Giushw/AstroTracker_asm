interface Links {
  next: string,
  previous: string,
  self: string
};

type innerLinks = Pick<Links, 'self'>;

interface UnitEntity {
  estimated_diameter_min: number,
  estimated_diameter_max: number
}

interface EstDiameter {
  kilometers: UnitEntity,
  meters: UnitEntity,
  miles: UnitEntity,
  feet: UnitEntity
};

interface RelVel {
  kilometers_per_second: number,
  kilometers_per_hour: number,
  miles_per_hour: number
};

interface MissDist {
  astronomical: number,
  lunar: number,
  kilometers: number,
  miles: number
};

interface ClsApprDate {
  close_approach_date: string,
  close_approach_date_full: string,
  epoch_date_close_approach: number,
  orbiting_body: string,
  relative_velocity: RelVel,
  miss_distance: MissDist,
};

type ClsApprDates = ClsApprDate[];

interface NeoEntity {
  links: innerLinks,
  id: string,
  neo_reference_id: string,
  name: string,
  nasa_jpl_url: string,
  absolute_magnitude_h: number
  is_potentially_hazardous_asteroid: boolean,
  is_sentry_object: boolean,
  estimated_diameter: EstDiameter,
  close_approach_data: ClsApprDates,
};

interface NearEarthObjects {
  [key: string]: NeoEntity[];
};

export interface NeoWs {
  links: Links;
  element_count: number;
  near_earth_objects: NearEarthObjects
};
