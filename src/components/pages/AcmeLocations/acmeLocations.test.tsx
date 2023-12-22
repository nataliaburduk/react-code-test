import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AcmeLocations } from '.';
import * as hooks from '../../../hooks/useFetchLocations';
import { render } from '../../../hoc/testingWithRedux';
import * as actions from '../../../redux/actions/locationActions';
import { ERROR_MESSAGE, NO_LOCATIONS } from './constants';

jest.mock('../../../hooks/useFetchLocations');

const mockLocations = [
  {
    id: 1,
    createdAt: '2021-03-05T09:10:35.462Z',
    name: 'McGlynnview',
    userCount: 6221,
    description: 'Investment Account',
  },
  {
    id: 2,
    createdAt: '2021-03-04T19:53:53.946Z',
    name: 'Garthburgh',
    userCount: 1,
    description: 'Deposit Account',
  },
];

const expectedCardContents = [
  {
    users: '6221 Users',
    timeAndZone: '10:10am (GMT+01:00)',
  },
  {
    users: '1 User',
    timeAndZone: '8:53pm (GMT+01:00)',
  },
];

describe('AcmeLocations component', () => {
  const spy = jest.spyOn(hooks, 'useFetchLocations');

  test('renders Skeleton Cards', async () => {
    spy.mockReturnValue({
      fetchLocations: actions.fetchLocations,
      process: 'idle',
      data: [],
      error: null,
    });

    render(<AcmeLocations />);

    expect(screen.getAllByTestId('location-skeleton-card').length).toEqual(25);
  });

  test('renders Error Message', async () => {
    spy.mockReturnValue({
      fetchLocations: actions.fetchLocations,
      process: 'error',
      data: [],
      error: ERROR_MESSAGE,
    });

    render(<AcmeLocations />);

    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  test('renders No locations Message', async () => {
    spy.mockReturnValue({
      fetchLocations: actions.fetchLocations,
      process: 'fulfilled',
      data: [],
      error: null,
    });

    render(<AcmeLocations />);

    expect(screen.getByText(NO_LOCATIONS)).toBeInTheDocument();
  });

  test('renders Locations Cards', async () => {
    spy.mockReturnValue({
      fetchLocations: actions.fetchLocations,
      process: 'fulfilled',
      data: mockLocations,
      error: null,
    });

    render(<AcmeLocations />);

    expect(screen.getByText('Acme locations')).toBeInTheDocument();
    expect(screen.getByText('All locations')).toBeInTheDocument();
    expect(screen.getAllByText('0 Views').length).toEqual(mockLocations.length);

    const cards = screen.getAllByTestId('location-card');
    const pencils = screen.getAllByTestId('edit-location-button');

    cards.forEach(async (card, index) => {
      const location = mockLocations[index];
      const contents = expectedCardContents[index];

      expect(card).toHaveTextContent(location.name);
      expect(card).toHaveTextContent(contents.users);
      expect(card).toHaveTextContent(contents.timeAndZone);

      userEvent.click(pencils[index]);
      await waitFor(() => {
        const modalWindow = screen.getByTestId('modal');

        expect(card).toHaveTextContent('1 View');
        expect(modalWindow).toBeInTheDocument();
        expect(modalWindow).toHaveTextContent(location.name);
        expect(modalWindow).toHaveTextContent(contents.users);
        expect(modalWindow).toHaveTextContent(contents.timeAndZone);
      });

      const closeIcon = screen.getByTestId('close-modal');

      userEvent.click(closeIcon);
      await waitFor(() => {
        expect(screen.getByTestId('modal')).not.toBeInTheDocument();
      });

      userEvent.click(pencils[index]);
      await waitFor(() => {
        expect(card).toHaveTextContent('2 Views');
      });
    });
  });
});
