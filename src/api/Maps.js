import React from 'react';
import Result from '../components/Result';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './GoogleApi'



function DominantMap(props) { 
     return (
        <div> 
        <p>Your personality is <strong>New York City.</strong> 
        You like to hustle, to be where the action is, to get things done.
        You prefer no nonsense, you are more than comfortable being in charge,
        and pretty much everything you do could be followed with #LikeABoss.</p>

     <MapContainer
          google={props.google}
          initialCenter={{
            lat: 40.712245,
            lng: -74.007876
          }}
          zoom={10}
        />
        </div>
     );
}

function InfluentialMap(props) {
    return (
        <div> 
        <p>Your personality is <strong>Los Angeles.</strong> 
        Your greatest strength is influencing other people, and your people skills make you an effective leader. 
        You are the life of the party,and you are quite comfortable being the center of attention. 
        Relationships are everything.There's nothing you'd rather be doing than creating meaningful 
        connections with people, whether at a cocktail party or one-on-one over coffee.</p>

     <MapContainer
          google={props.google}
          initialCenter={{
            lat: 34.047475,
            lng: -118.273077
          }}
          zoom={10}
        />
        </div>
        );
}
    

function SteadyMap(props) {
     return (
     <div> 
        <p>Your personality is <strong>Charlotte, North Carolina.</strong> 
        You are a strong and steady individual. You value family, community, tradition, beauty, and harmony.
        You appreciate long walks through picturesque parks, sit down chats over iced tea or coffee, and
        home-cooked dinners with family and friends. You are patient, humble, and genuinely interested in giving
        back to the community where you live.</p>

     <MapContainer
          google={props.google}
          initialCenter={{
            lat: 35.224149,
            lng: -80.842621
          }}
          zoom={10}
        />
 </div> 
     );
}

function CompliantMap(props) { 
    return (
    <div> 
        <p>Your personality is <strong>Washington DC.</strong> 
        You are both practical and analytical by nature. Therefore rules and regulations and principles are 
        important to you. You are systematic, thorough, precise, and very careful. But you also know how to get
        things done. You can be relied upon to produce great results, no matter what you are asked to do. While systems
        appeal to you, your kindness also makes you a trustworthy and thoughtful friend.</p>

     <MapContainer
          google={props.google}
          initialCenter={{
            lat: 38.904200,
            lng: -77.037246
          }}
          zoom={10}
        />
 </div> 
    );
}

function UndeterminedMap(props) {
    return (
    <div> 
        <p>Your personality is <strong>Nashville.</strong> 
        You are a complex and well-rounded person. You know how to have a good time, and you appreciate culture and night
        life. But you are also committed to family and career. You enjoy the outdoors, but you are equally happy visting
        a hip new restaurant or relaxing spa. You like to keep your options open....unless you know exactly what you want.
        Basically, you like variety and you are good at keeping things in balance.</p>

     <MapContainer
          google={props.google}
          initialCenter={{
            lat: 36.157491,
            lng: -86.760571
          }}
          zoom={10}
        />
 </div> 
    );
}

function ResultMap(props) {
    if (props.quizResult === 'Dominant') {
        return <DominantMap />;
    }

    else if (props.quizResult === 'Influential') {
        return <InfluentialMap />;
    }

    else if (props.quizResult === 'Steady') {
        return <SteadyMap />;
    }

    else if (props.quizResult === 'Compliant') {
        return <CompliantMap />;
    }

    else {
        return <UndeterminedMap />;
    }
}

export default ResultMap;