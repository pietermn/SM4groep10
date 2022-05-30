import "./UserScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";
import { useFetchUser } from "../../api/useQueryHooks/useUserHooks";
import CalendarCard from "../../components/CalenderCard/CalendarCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";
import { Reservation, User } from "../../globaltypes";

const StatsScreen = () => {
    const { data: user, isLoading } = useFetchUser();
    const { data: cars } = useFetchCars();
    var reservations: Reservation[];

    function getReservationsFromUser(user: User): Reservation[]{
        cars?.forEach(car => {
            var addreservations = car.reservations.filter(x => x.user.id == user.id)
            reservations.concat(addreservations)
        });
        console.log(reservations);
        return reservations
    }

    return (
        <div className="main-container">
            <div className="user-containers">
                {user ? (
                    <>
                        <UserPageHeader name={user.name} colour={user.colour} />
                        <UserStatsCard driven={100} paid={210} />
                        {/* <CalendarCard reservations={getReservationsFromUser(user)}/> */}
                    </>
                ) : (
                    <>
                        <UserPageHeader name="-" colour="white" />
                        <UserStatsCard driven={0} paid={0} />
                    </>
                )}
                {/* <CarPageHeader name={"COOPER SE"} type={CarTypeEnum.minicooperside} colour={"Orange"} tripStatus={false}></CarPageHeader> */}
                {/* <CarStatsCard range={car.maxRange} volume={car.tank} odometer={car.odometer} consumption={"1 L:" + Math.round((car.maxRange/car.tank)).toString() + " km"}></CarStatsCard>
                <AverageUseStatsCard car={car}></AverageUseStatsCard> */}
                {/* <OdometerOverlay car={car} /> */}
            </div>
        </div>
    );
};

export default StatsScreen;
