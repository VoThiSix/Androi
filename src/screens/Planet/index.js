import { useContext } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { PlanetsContext } from '../../context/planetsContext';
import { styles } from './styles';
import { Background } from '../../components/Background/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoon, faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

export function Planet(props) {
  const [planet] = useContext(PlanetsContext);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          style={[styles.planet]}
          source={planet.imageBig}
        />
        <View style={styles.information}>
          <View style={styles.status}>
            <View key="moons" style={styles.statu}>
              <FontAwesomeIcon icon={faMoon} size={20} color="white" />
              <Text style={styles.statuText}>{planet.moons}</Text>
            </View>
            <View key="age" style={styles.statu}>
              <Text style={{ color: '#FFFAFA' }}>About</Text>
              <Text style={styles.statuText}>{planet.age} billion years</Text>
            </View>
            <View key="temperature" style={styles.statu}>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} size={20} color="white" />
              <Text style={styles.statuText}>{planet.temperature}°</Text>
            </View>
          </View>

        <Text style={styles.description}>{planet.description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(planet.link)}>
          <Text style={styles.buttonText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </Background >
  );
}
