import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveReference,
} from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation(() => Location)
  createLocation(
    @Args('createLocationInput') createLocationInput: CreateLocationInput,
  ) {
    return this.locationService.create(createLocationInput);
  }

  @Query(() => [Location], { name: 'locations' })
  findAll() {
    return this.locationService.findAll();
  }

  @Query(() => Location, { name: 'location' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.locationService.findOne(id);
  }

  @Mutation(() => Location)
  updateLocation(
    @Args('updateLocationInput') updateLocationInput: UpdateLocationInput,
  ) {
    return this.locationService.update(
      updateLocationInput.id,
      updateLocationInput,
    );
  }

  @Mutation(() => Location)
  removeLocation(@Args('id', { type: () => Int }) id: number) {
    return this.locationService.remove(id);
  }
  /**
   *
   * @param reference Resolver provides one additional method named resolveReference().
   *  This method is triggered by the Apollo Gateway whenever a related resource requires a User instance.
   *  We'll see an example of this in the Posts service later.
   *  Please note that the method must be annotated with the @ResolveReference() decorator.
   * @returns
   */
  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    console.log('Location->>>>>', reference.id);
    return this.locationService.findOne(reference.id);
  }
}
