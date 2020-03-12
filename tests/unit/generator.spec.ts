import { shallowMount } from '@vue/test-utils';
import RandomGenerator from '@/components/RandomGenerator.vue';

describe('RandomGenerator.vue', () => {
  it('mounts properly', () => {
    const wrapper = shallowMount(RandomGenerator);
    expect(wrapper.html()).not.toBeNull();
  });

  it('can generate numbers', () => {
    const wrapper: any = shallowMount(RandomGenerator);
    expect(wrapper.vm.$data.results.length).toBe(0);
    wrapper.vm.generate();
    expect(wrapper.vm.$data.results.length).toBe(1);
    wrapper.vm.generate({ count: 5 });
    expect(wrapper.vm.$data.results.length).toBe(5);
  });

  it('can generate numbers within a range', () => {
    const wrapper: any = shallowMount(RandomGenerator);
    wrapper.vm.generate({ count: 2, min: 10, max: 100 });
    expect(wrapper.vm.$data.results[0]).toBeGreaterThanOrEqual(10);
    expect(wrapper.vm.$data.results[0]).toBeLessThanOrEqual(100);
    expect(wrapper.vm.$data.results[1]).toBeGreaterThanOrEqual(10);
    expect(wrapper.vm.$data.results[1]).toBeLessThanOrEqual(100);
    wrapper.vm.generate({ min: 60, max: 60 });
    expect(wrapper.vm.$data.results[0]).toBeGreaterThanOrEqual(60);
    expect(wrapper.vm.$data.results[0]).toBeLessThanOrEqual(60);
  });

  it('displays the numbers it generated', () => {
    const wrapper: any = shallowMount(RandomGenerator);
    expect(wrapper.find('#results').findAll('li').length).toBe(0);
    wrapper.vm.generate({ count: 5, min: 10, max: 100 });
    const results = wrapper.find('#results').findAll('li');
    expect(results.length).toBe(5);
    const displayArray: number[] = [];
    for ( let n = 0; n < 5; n++ ) {
      displayArray.push(parseInt(results.at(n).text(), 10));
    }
    expect(displayArray.sort().join(',')).toEqual(wrapper.vm.$data.results.sort().join(','));
  });

  it('can take user input for the parameters with a form', () => {
    const wrapper = shallowMount(RandomGenerator);
    wrapper.find('#count').setValue(3);
    wrapper.find('#min').setValue(20);
    wrapper.find('#max').setValue(50);
    wrapper.find('#btn').trigger('click');
    expect(wrapper.vm.$data.results.length).toBe(3);
    expect(wrapper.vm.$data.results[0]).toBeGreaterThanOrEqual(20);
    expect(wrapper.vm.$data.results[0]).toBeLessThanOrEqual(50);
    expect(wrapper.vm.$data.results[1]).toBeGreaterThanOrEqual(20);
    expect(wrapper.vm.$data.results[1]).toBeLessThanOrEqual(50);
    expect(wrapper.vm.$data.results[2]).toBeGreaterThanOrEqual(20);
    expect(wrapper.vm.$data.results[2]).toBeLessThanOrEqual(50);
  });

  it('validates the input it is given', () => {
    const wrapper = shallowMount(RandomGenerator);
    // Less than 10 numbers
    wrapper.find('#count').setValue(11);
    wrapper.find('#min').setValue(1);
    wrapper.find('#max').setValue(10);
    wrapper.find('#btn').trigger('click');
    expect(wrapper.vm.$data.results.length).toBe(0);
    // Handles Negatives
    wrapper.find('#count').setValue(-1);
    wrapper.find('#min').setValue(1);
    wrapper.find('#max').setValue(10);
    wrapper.find('#btn').trigger('click');
    expect(wrapper.vm.$data.results.length).toBe(0);
    // Sane min/max parsing
    wrapper.find('#count').setValue(4);
    wrapper.find('#min').setValue(20);
    wrapper.find('#max').setValue(6);
    wrapper.find('#btn').trigger('click');
    expect(wrapper.vm.$data.results.length).toBe(0);
    // Requires a min and max above 0
    wrapper.find('#count').setValue(1);
    wrapper.find('#min').setValue(0);
    wrapper.find('#max').setValue(0);
    wrapper.find('#btn').trigger('click');
    expect(wrapper.vm.$data.results.length).toBe(0);
    // Handles nonsense
    wrapper.find('#count').setValue('g');
    wrapper.find('#min').setValue(-10000.4);
    wrapper.find('#max').setValue(false);
    wrapper.find('#btn').trigger('click');
    expect(wrapper.vm.$data.results.length).toBe(0);
  });
});
