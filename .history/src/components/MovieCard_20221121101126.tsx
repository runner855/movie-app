import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";
import MoviesCall from "../api/MoviesCall";
import { MovieDetailsProps } from "../../.history/src/types/ApiTypes_20221118175849";
import { url } from "inspector";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps>();
  const params = useParams();

  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovieDetails(res.data);
      });
  }, [params]);

  return (
    <>
      {/* {movieDetails && (
        <div
          classNameName="movie_card"
          style={{
            backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`})`,
          }}
        >
          <div classNameName="movie_card_container"></div>

          <p>{movieDetails.overview}</p>
        </div>
      )} */}

.card
  .card_left
    %img{:src => 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png'}
  .card_right
    %h1 KILL  BILL:  VOL.  1
    .card_right__details
      %ul
        %li 2003
        %li 111 min
        %li Action
      .card_right__rating
        .card_right__rating__stars
          %fieldset.rating
            %input#star10{:name => "rating", :type => "radio", :value => "10"}/
            %label.full{:for => "star10", :title => "10 stars"}
            %input#star9half{:name => "rating", :type => "radio", :value => "9 and a half"}/
            %label.half{:for => "star9half", :title => "9.5 stars"}
            %input#star9{:name => "rating", :type => "radio", :value => "9"}/
            %label.full{:for => "star9", :title => "9 stars"}
            %input#star8half{:name => "rating", :type => "radio", :value => "8 and a half"}/
            %label.half{:for => "star8half", :title => "8.5 stars"}
            %input#star8{:name => "rating", :type => "radio", :value => "8"}/
            %label.full{:for => "star8", :title => "8 stars"}
            %input#star7half{:name => "rating", :type => "radio", :value => "7 and a half"}/
            %label.half{:for => "star7half", :title => "7.5 stars"}
            %input#star7{:name => "rating", :type => "radio", :value => "7"}/
            %label.full{:for => "star7", :title => "7 stars"}
            %input#star6half{:name => "rating", :type => "radio", :value => "6 and a half"}/
            %label.half{:for => "star6half", :title => "6.5 stars"}
            %input#star6{:name => "rating", :type => "radio", :value => "6"}/
            %label.full{:for => "star6", :title => "6 star"}
            %input#star5half{:name => "rating", :type => "radio", :value => "5 and a half"}/
            %label.half{:for => "star5half", :title => "5.5 stars"}
            %input#star5{:name => "rating", :type => "radio", :value => "5"}/
            %label.full{:for => "star5", :title => "5 stars"}
            %input#star4half{:name => "rating", :type => "radio", :value => "4 and a half"}/
            %label.half{:for => "star4half", :title => "4.5 stars"}
            %input#star4{:name => "rating", :type => "radio", :value => "4"}/
            %label.full{:for => "star4", :title => "4 stars"}
            %input#star3half{:name => "rating", :type => "radio", :value => "3 and a half"}/
            %label.half{:for => "star3half", :title => "3.5 stars"}
            %input#star3{:name => "rating", :type => "radio", :value => "3"}/
            %label.full{:for => "star3", :title => "3 stars"}
            %input#star2half{:name => "rating", :type => "radio", :value => "2 and a half"}/
            %label.half{:for => "star2half", :title => "2.5 stars"}
            %input#star2{:name => "rating", :type => "radio", :value => "2"}/
            %label.full{:for => "star2", :title => "2 stars"}
            %input#star1half{:name => "rating", :type => "radio", :value => "1 and a half"}/
            %label.half{:for => "star1half", :title => "1.5 stars"}
            %input#star1{:name => "rating", :type => "radio", :value => "1"}/
            %label.full{:for => "star1", :title => "1 star"}
            %input#starhalf{:name => "rating", :type => "radio", :value => "half"}/
            %label.half{:for => "starhalf", :title => "0.5 stars"}
      .card_right__review
        %p The lead character, called 'The Bride,' was a member <br/> of the Deadly Viper Assassination Squad, led by her <br/> lover 'Bill.' Upon realizing she was pregnant with Bill's<br/> child, 'The Bride' decided to escape her life as a killer.<br/> She fled to Texas, met a young man, who, on the day<br/> of their wedding rehearsal was gunned down by....
        %a{:href => "http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl", :target => "_blank"} Read more
      .card_right__button
        %a{:href => "https://www.youtube.com/watch?v=ot6C1ZKyiME", :target => "_blank"} WATCH TRAILER
    </>
  );
};
