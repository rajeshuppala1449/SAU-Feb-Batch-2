import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import AllColors from '../assets/AllColors';

class Details extends Component {

  state = {
    movie_details: null,
    id: 0
  }

  componentDidUpdate(prevProps) {
    if (this.props.id != prevProps.id) {
      fetch("https://api.themoviedb.org/3/movie/" + this.props.id + "?api_key=fe9d22e75d70883407093de1daed3c8b&language=en-US")
        .then((response) => response.json())
        .then((json) => {
          this.setState({ movie_details: json, id: this.props.id })
          // console.log(this.props)
        }).catch(err => console.log(err))
    }
  }
  componentDidMount() {

    fetch("https://api.themoviedb.org/3/movie/" + this.props.id + "?api_key=fe9d22e75d70883407093de1daed3c8b&language=en-US")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ movie_details: json, id: this.props.id })

      }).catch(err => console.log(err))
  }
  render() {
    //console.log(this.props);
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: AllColors.smokewhite }}>
          {this.state.id == this.props.id ? (
            <>
              <View style={{ flex: 1, width: '100%', height: 300, borderColor: AllColors.white, borderWidth: 3 }}>
                <Image
                  source={{ uri: "https://image.tmdb.org/t/p/w500/" + this.props.link.backdrops[0].file_path }}
                  // source={require('../assets/demo.jpg')}
                  style={{
                    height: '100%',
                    width: "100%"
                  }}
                />
              </View>
              <View style={{ flex: 1, marginTop: 10 }}>
                <View style={styles.titles}>
                  <Text style={{ color: AllColors.blacK, fontSize: 20, fontWeight: 'bold', fontSize: 30, color: 'grey' }} >{this.state.movie_details.title} </Text>
                </View>
                <View style={styles.statusd}>
                  <Text style={{ color: AllColors.blacK, fontSize: 20, color: 'grey' }} >{this.state.movie_details.status}  {this.state.movie_details.release_date}</Text>
                </View>
                <View style={styles.desc}>
                  <Text style={{ color: AllColors.blacK, fontSize: 20, color: 'grey', height: '100%' }}>{this.state.movie_details.overview} </Text>
                </View>
              </View>
            </>
          ) : <Image
            source={require('../assets/ispinner.jpg')}></Image>}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  titles: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,

    elevation: 21,
    backgroundColor: AllColors.white,
    padding: 15,

    borderRadius: 10,
    justifyContent: 'center'

  },
  desc: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
    marginTop: 10, backgroundColor: AllColors.white, paddingHorizontal: 5, paddingVertical: 10, borderRadius: 10, justifyContent: 'center'
  },
  statusd: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
    marginTop: 10, backgroundColor: AllColors.white, padding: 10, borderRadius: 10, justifyContent: 'center'
  }
})

export default Details;


/*
movie_details
{
  "adult": false,
  "backdrop_path": "/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
  "belongs_to_collection": {
    "backdrop_path": "/h4MNLYzr6Cr02iHv3Hpqb9lmTPv.jpg",
    "id": 8945,
    "name": "Mad Max Collection",
    "poster_path": "/uuvSvLb3ntGA9B0wx2JskVDSuWi.jpg"
  },
  "budget": 150000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": "https://www.warnerbros.com/movies/mad-max-fury-road",
  "id": 76341,
  "imdb_id": "tt1392190",
  "original_language": "en",
  "original_title": "Mad Max: Fury Road",
  "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
  "popularity": 55.628,
  "poster_path": "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  "production_companies": [
    {
      "id": 2537,
      "logo_path": null,
      "name": "Kennedy Miller Productions",
      "origin_country": "AU"
    },
    {
      "id": 174,
      "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
      "name": "Warner Bros. Pictures",
      "origin_country": "US"
    },
    {
      "id": 41624,
      "logo_path": "/wzKxIeQKlMP0y5CaAw25MD6EQmf.png",
      "name": "RatPac-Dune Entertainment",
      "origin_country": "US"
    },
    {
      "id": 79,
      "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
      "name": "Village Roadshow Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "AU",
      "name": "Australia"
    },
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    },
    {
      "iso_3166_1": "ZA",
      "name": "South Africa"
    }
  ],
  "release_date": "2015-05-13",
  "revenue": 378858340,
  "runtime": 121,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "What a Lovely Day.",
  "title": "Mad Max: Fury Road",
  "video": false,
  "vote_average": 7.5,
  "vote_count": 17648
}
========================================================================================================================
-----------------------------------------------------------------------------------------------------------------------
// 20210223225220
// https://api.themoviedb.org/3/movie/76341/images?api_key=fe9d22e75d70883407093de1daed3c8b
images response
this.route.params.link
{
  "id": 76341,
  "backdrops": [
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.522,
      "vote_count": 4,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/n6vWE0bXq4ImAM00iM5gWyORNSM.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.454,
      "vote_count": 3,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/xcq8S44RxINfqHg6zCXmVoYiTC1.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/wkugPbph0CuyXWfxRyHSGYRPQbe.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/dBuqJyQERim2GRPlVJTUG0hDEvi.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/dNvVlcZtD2fq0hNuY96gZuwRP8V.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/nDDyl7BcAzob7zvY8vXBYcls4Ss.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/8BVSqAfU5knNkxyCH4JiANHwjeZ.jpg",
      "height": 720,
      "iso_639_1": "en",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1280
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/wl8xNUX8bIfzbMIau2HzaVJ0UIW.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/9hdEQmLC14EbBVnGSjI4WM1ElZB.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 3840
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/uT895WNwm0aIJRtGizcQhrejWUo.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 3840
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/hrYbZY9HaGMlEQsUeEx2lu3vWPy.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 3840
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/ejyXv2hRKeA3lU9AHU3Jd59IwoG.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 3840
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/6mSoaVXh49uL7WToevAuXFxWAsP.jpg",
      "height": 2160,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 3840
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/k0XbKEBmyw4jVa6GT53bkuAWue3.jpg",
      "height": 720,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1280
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/t3PoCBS56BmtfhKcKq8Av4KYHzN.jpg",
      "height": 900,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1600
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/ij11D6aT7RVxBGETUL68NUMnWkn.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/5rRRDwF4jwN9zps1oU7tBUeEJXt.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/whaE3CndXbtRM4OmnimLIaEciDk.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/A5fi1BAoMwbab0WBzD21KZ1BUQV.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/8yACFuo4OaIiKr9hHFlmPcGalKx.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/cfl0C5WsX7q8LeHnFPBS1s656A.jpg",
      "height": 1575,
      "iso_639_1": null,
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 2800
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/by1ZgyZpUymvwXNY594oIOfMdaB.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1920
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/uxROX5koEqzRrBEwPMK1saNsnge.jpg",
      "height": 720,
      "iso_639_1": null,
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1280
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/itrArRxxf2WihWkZUDZoxSq2LBN.jpg",
      "height": 720,
      "iso_639_1": null,
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1280
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/1j8mzjCG3cw2F9S5WNPQvi1u5uc.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1920
    },
    {
      "aspect_ratio": 1.778907242693774,
      "file_path": "/rlfhpMn2wqgMxZlFLnfJYQ6AKIB.jpg",
      "height": 787,
      "iso_639_1": null,
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 1400
    },
    {
      "aspect_ratio": 1.778907242693774,
      "file_path": "/eGGb0nirfVqyOjqoTrnOczJ2xOv.jpg",
      "height": 787,
      "iso_639_1": null,
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 1400
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/awvkJ62h925kYSlObchVAuA5qBP.jpg",
      "height": 1575,
      "iso_639_1": null,
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 2800
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/fEOUBISVGO7wyiT0hafVVXRbDpp.jpg",
      "height": 1575,
      "iso_639_1": null,
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 2800
    },
    {
      "aspect_ratio": 1.778907242693774,
      "file_path": "/rWPQQDWReesdkGemUokF15ch864.jpg",
      "height": 787,
      "iso_639_1": null,
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 1400
    },
    {
      "aspect_ratio": 1.777777777777778,
      "file_path": "/5Y7Nc4TJeVKSWpAtd0L72XzemNx.jpg",
      "height": 1080,
      "iso_639_1": null,
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 1920
    }
  ],
  "posters": [
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/oLy2V6AWSEfdPgKOtrSGnwB3Q2R.jpg",
      "height": 3000,
      "iso_639_1": "fr",
      "vote_average": 5.588,
      "vote_count": 5,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/aODQnrVGqXdy4RlkV9dnRaMQr6f.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 5.522,
      "vote_count": 4,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 5.522,
      "vote_count": 6,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/9B0ux0csEnxLi88MIJMX6MIinFL.jpg",
      "height": 2100,
      "iso_639_1": "fr",
      "vote_average": 5.454,
      "vote_count": 3,
      "width": 1400
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/3Q5WUmVGMyiTDHA83koBoKpTtx3.jpg",
      "height": 3000,
      "iso_639_1": "es",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/auGxRPeTiC5p95sWktXJ4uIi6a4.jpg",
      "height": 2100,
      "iso_639_1": "ja",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1400
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/mnVZLdo9C4X80sJmgcGNpMNCbgk.jpg",
      "height": 3000,
      "iso_639_1": "es",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/dQEWWw2EkhV49NENQB7pzkfD0Eb.jpg",
      "height": 1500,
      "iso_639_1": "uk",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/wYkYJOSgPuamyXlfo2MoW8sShOR.jpg",
      "height": 3000,
      "iso_639_1": "cs",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/rlfnoJJA7Uj3NZX4zMf4OxPPlbY.jpg",
      "height": 1500,
      "iso_639_1": "he",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/5gbm8m1gYvOmVGRcxteiplDLWdg.jpg",
      "height": 3000,
      "iso_639_1": "it",
      "vote_average": 5.384,
      "vote_count": 2,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/m3EapIdpF1AzZsxsOvO9v63RoiX.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/tH64gzAHDFg7EFcgfkkZyHdGM5P.jpg",
      "height": 2841,
      "iso_639_1": "pt",
      "vote_average": 5.318,
      "vote_count": 3,
      "width": 1894
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/88Nr1aW1VC9vSc8G07hj7OoGm9N.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/5T9rym5PFube4ZKymURd5VL3Pxr.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/vl5661icxjzGLNjYE1sJz2Iiz47.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/bkDnNt0SOBJHXybCvkaQy7VHvm4.jpg",
      "height": 3000,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/homWgHi3lzVGgJ69X8J2qOv9ued.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/n4d2ljHiTv32pKUvs0LIIoDxctX.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/iPJEQZR1QceGUGGmuHGtqZqjtFg.jpg",
      "height": 3000,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/y22XRA6ToNIAly99gqtPzDLbi9o.jpg",
      "height": 3000,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/2Q1QTnqJYZPe3jpKZbltq9ntYrd.jpg",
      "height": 3000,
      "iso_639_1": "ru",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/tvpf0gi4EOIuI9in1obHaNezJc2.jpg",
      "height": 3000,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/5BsZ7TzO6rCYKcPhXLhoPMvJSWz.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/dJlitHyniEguSN9eZLZOBbPTKuo.jpg",
      "height": 1950,
      "iso_639_1": null,
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1300
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/tDPGpolVoiaUZkCrcEe0uMjLZMs.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/tS4vdIbKg0DWxyIbcjYUnLXQCpJ.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/hGYNE8S1iSj2Tb41dKc9WCNmbOY.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/f7ivCrORRkSxkuO7InSoQfiwUaT.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/lP9tZ56xh35ZcxgGfUntRdU0Cof.jpg",
      "height": 1500,
      "iso_639_1": "hu",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/ap9xcybOweYEko23IxVIwsNsjSz.jpg",
      "height": 1500,
      "iso_639_1": "hu",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6668889629876625,
      "file_path": "/41tUBEVfe1LzP73RJENy4cwBkci.jpg",
      "height": 2999,
      "iso_639_1": "ru",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/3tdXXuXIWU26LffOntbYFfX1SNN.jpg",
      "height": 1500,
      "iso_639_1": "ru",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/eLNlIxkzd1SyDbTkR91FTRyPrla.jpg",
      "height": 1500,
      "iso_639_1": "it",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/u7XxRnMuGlj8Wd87B6Y8rX9Vgl6.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/qf0IkaPtB4jqVGPWlLbOVxhmTd9.jpg",
      "height": 1500,
      "iso_639_1": "it",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6715583508036338,
      "file_path": "/2s2b3FgmDC7EyJoDF6vybnJbAGe.jpg",
      "height": 1431,
      "iso_639_1": "ko",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 961
    },
    {
      "aspect_ratio": 0.6715634837355718,
      "file_path": "/ghHPljgA16XMoU8GUZsRV4hdO2t.jpg",
      "height": 953,
      "iso_639_1": "ko",
      "vote_average": 5.246,
      "vote_count": 2,
      "width": 640
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/wf0rvyXBTf2me1af6T0Z7WykTVo.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.18,
      "vote_count": 3,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/j8vuiInBiu2WFWq4tFkjhmT0MUg.jpg",
      "height": 750,
      "iso_639_1": "pl",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 500
    },
    {
      "aspect_ratio": 0.7107320540156361,
      "file_path": "/4lgFTVoXod0DFa1UebPkrDzKGiD.jpg",
      "height": 1407,
      "iso_639_1": "cn",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7069689336691856,
      "file_path": "/uGoRE9fu9hhE4PdQWtzbX4aZd1L.jpg",
      "height": 1191,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 842
    },
    {
      "aspect_ratio": 0.7048872180451128,
      "file_path": "/mrdn165iU4tWQW2FAxhc2tkF3bg.jpg",
      "height": 2128,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1500
    },
    {
      "aspect_ratio": 0.75,
      "file_path": "/9VUGPgacHm6WGH6McuaZzuvBagK.jpg",
      "height": 1600,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1200
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/fWyCkebqwGNtN8WtjOL1hcFG3KO.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/xolab3rQvTKFBMIcZ7hSeDmV9vi.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/uIsddhWDnm1XvzVL8aw5O25cwDy.jpg",
      "height": 750,
      "iso_639_1": "be",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 500
    },
    {
      "aspect_ratio": 0.6715634837355718,
      "file_path": "/jZQ38TLApAeaLcrcx0xlAiz4cg9.jpg",
      "height": 953,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 640
    },
    {
      "aspect_ratio": 0.6715634837355718,
      "file_path": "/52T5AH9HpHbaavNnts1469krDbV.jpg",
      "height": 953,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 640
    },
    {
      "aspect_ratio": 0.6715583508036338,
      "file_path": "/lhNdNpjsM4ypnzMfv0MODWDDIxX.jpg",
      "height": 1431,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 961
    },
    {
      "aspect_ratio": 0.6700125470514429,
      "file_path": "/j9nBrOAt9RG4r3aevQmaS6IAovE.jpg",
      "height": 2391,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1602
    },
    {
      "aspect_ratio": 0.6693333333333333,
      "file_path": "/6E4T3klXRDIBZwolVjJliPhBCLe.jpg",
      "height": 750,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 502
    },
    {
      "aspect_ratio": 0.6715634837355718,
      "file_path": "/zUlVMBJ5W4kemD9AGCBsdQqqUK2.jpg",
      "height": 953,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 640
    },
    {
      "aspect_ratio": 0.6708015267175572,
      "file_path": "/y4cRdF0hg6mddfUakdi39FAZ60H.jpg",
      "height": 1048,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 703
    },
    {
      "aspect_ratio": 0.6715634837355718,
      "file_path": "/c5Nn9DX9d2NM23OJaVdXAcV18vg.jpg",
      "height": 953,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 640
    },
    {
      "aspect_ratio": 0.6715634837355718,
      "file_path": "/2ejpT6iGhudhjlO7KZToN0mYuta.jpg",
      "height": 953,
      "iso_639_1": "ko",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 640
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/f5uXeqaGX1nWPF7PjWfr4njJ5p7.jpg",
      "height": 1500,
      "iso_639_1": "cs",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/nbqYlm789Vx3z33qsSN4LWotXvz.jpg",
      "height": 1278,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 852
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/cd0hBFaE6cNxbT4lH86jwp8xtg5.jpg",
      "height": 2100,
      "iso_639_1": "hu",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1400
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/bzxR7VXzoEbZv49KAxcviS6Cz5M.jpg",
      "height": 1077,
      "iso_639_1": "bg",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 718
    },
    {
      "aspect_ratio": 0.66650390625,
      "file_path": "/p2c1Tzg41ztn7pWJdZZ4fZxVbb8.jpg",
      "height": 2048,
      "iso_639_1": "zh",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1365
    },
    {
      "aspect_ratio": 0.71044921875,
      "file_path": "/hEsrg6KSsJmBWzlXmmNKo34yXlB.jpg",
      "height": 2048,
      "iso_639_1": "cn",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1455
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/3xyBAAOeCW59Tf9nOf9VtKA5oPn.jpg",
      "height": 750,
      "iso_639_1": "vi",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 500
    },
    {
      "aspect_ratio": 0.6460859977949284,
      "file_path": "/gioi31RDMpSMwlDmnx6MTaggsPt.jpg",
      "height": 2721,
      "iso_639_1": "th",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1758
    },
    {
      "aspect_ratio": 0.525,
      "file_path": "/24UUTuTAfdfOGTN24NgywaNHVGi.jpg",
      "height": 1200,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 630
    },
    {
      "aspect_ratio": 0.66625,
      "file_path": "/tCg9tQ9c8fsI79leK3r9wcMOQ6i.jpg",
      "height": 800,
      "iso_639_1": "tr",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 533
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/guSoNeFXSN9ejuvaMvQpVXJQUwD.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.172,
      "vote_count": 1,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/mE9ShTg5UoOIgo1LTkC1iZGMN1o.jpg",
      "height": 1426,
      "iso_639_1": "pt",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/zQaB6P6XpYuEdS2FVGQQhBy9wh0.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/87L4RE7GhG8fD6FPrBYYQc4a5wg.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/xjZh3YsL6vwinrXPAXcBKGsIvz6.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/xQmNlcwA7p7L7YIEPMuoZq5WOgp.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/xygwFuag2OlxWgIigbGjNzW1IUT.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/kiJqReZL3AhNebRFVwrmKjbB4hQ.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/jcnebguIweSr16AaBOdzsUL4Dzl.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6663598711458812,
      "file_path": "/zJpKyQA5BVqPR2Jrn3RZw3axkRP.jpg",
      "height": 2173,
      "iso_639_1": "uk",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1448
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/ri8XD6TfJM71jNu9gkhLdyKpxXO.jpg",
      "height": 1800,
      "iso_639_1": "uk",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1200
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/1Ek4LotxOc1bIVHvfOfQ318gdFc.jpg",
      "height": 1500,
      "iso_639_1": "en",
      "vote_average": 5.106,
      "vote_count": 2,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/qi26TigmsBKYgT0xwzi6L20miHv.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/eSHGBtatVEJ3yRQ42XVsi0SPWCr.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.7012622720897616,
      "file_path": "/1nEn6dbkyUHAXMh1a5MyiVIahRC.jpg",
      "height": 1426,
      "iso_639_1": "en",
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 1000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/fuVYEfvpXQU9fGsmyDIReAHdPBD.jpg",
      "height": 3000,
      "iso_639_1": "en",
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.6666666666666666,
      "file_path": "/gOIBJ78mOTLe4kg9kRR9pEvsxvC.jpg",
      "height": 3000,
      "iso_639_1": "ru",
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 2000
    },
    {
      "aspect_ratio": 0.7066666666666667,
      "file_path": "/pXcQYaFEUf1lhdGRmcQ81yfn2XC.jpg",
      "height": 1200,
      "iso_639_1": "mo",
      "vote_average": 0.0,
      "vote_count": 0,
      "width": 848
    }
  ]
}
*/