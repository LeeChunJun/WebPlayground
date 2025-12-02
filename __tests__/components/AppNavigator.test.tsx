import React from 'react';
import { render } from '@testing-library/react-native';
import { AppNavigator } from '../../src/navigation/AppNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('AppNavigator renderHomeIcon', () => {
  it('should render home icon with given color', () => {
    const testColor = '#ff0000';
    const { getByTestId } = render(
      <AppNavigator.renderHomeIcon color={testColor} />
    );
    
    const icon = getByTestId('home-icon');
    expect(icon.props.color).toBe(testColor);
    expect(icon.props.size).toBe(26);
    expect(icon.props.name).toBe('home');
  });

  it('should handle empty color string', () => {
    const { getByTestId } = render(
      <AppNavigator.renderHomeIcon color="" />
    );
    
    const icon = getByTestId('home-icon');
    expect(icon.props.color).toBe('');
  });

  it('should handle undefined color', () => {
    const { getByTestId } = render(
      <AppNavigator.renderHomeIcon color={undefined} />
    );
    
    const icon = getByTestId('home-icon');
    expect(icon.props.color).toBeUndefined();
  });
});