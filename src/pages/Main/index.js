import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Tabs from '../../components/Tab';

import {
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Title,
    Description,
    Annotation,
} from './styles';

const Main = () => {
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],

        { UseNativeDriver: true },
    );

    function onHandlerStateChange(event) {}

    return (
        <Container>
            <Header />

            <Content>
                <Menu translateY={translateY} />
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                    <Card
                        style={{
                            transform: [
                                {
                                    translateY: translateY.interpolate({
                                        inputRange: [-300, 0, 380],
                                        outputRange: [-50, 0, 380],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        }}
                    >
                        <CardHeader>
                            <Icon name="attach-money" size={28} color="#666" />
                            <Icon
                                name="visibility-off"
                                size={28}
                                color="#666"
                            />
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$ 197.237,36 </Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>Teste de anotação</Annotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>
            </Content>
            <Tabs />
        </Container>
    );
};

export default Main;
