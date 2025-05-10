import { useEffect } from "react";

import { useNavigation } from "expo-router";

export function useUpdateHeaderOption(title: string, options?: object) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title,
      ...options,
    });
  }, [navigation, , title, options]);
}
