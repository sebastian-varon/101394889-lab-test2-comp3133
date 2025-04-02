export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
    first_stage?: any;
    second_stage?: any;
  };
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  links: {
    mission_patch_small: string;
    wikipedia?: string;
    article_link?: string;
    video_link?: string;
  };
}
