import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image, StyleSheet } from "react-native";

import  images  from "../../constants/images";
import  CustomButton  from "../../components/CustomButton"
import FormField from "../../components/FormField";
// import { getCurrentUser, signIn } from "../../lib/appwrite";

const { height } = Dimensions.get("window");

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);

  //   try {
  //     await signIn(form.email, form.password);
  //     const result = await getCurrentUser();
  //     setUser(result);
  //     setIsLogged(true);
  //     Alert.alert("Success", "User signed in successfully");
  //     router.replace("/home");
  //   } catch (error) {
  //     Alert.alert("Error", error.message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Image source={images.logo} resizeMode="contain" style={styles.logo} />

          <Text style={styles.title}>Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.formField}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.formField}
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={styles.buttonContainer}
            isLoading={isSubmitting}
          />

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <Link href="/sign-up" style={styles.signupLink}>
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622", // Matches Tailwind `bg-primary`
  },
  innerContainer: {
    width: "100%",
    minHeight: height - 100, // Ensures content covers full screen height minus header
    justifyContent: "center",
    paddingHorizontal: 12, // Matches Tailwind `px-4`
    marginVertical: 40, // Matches Tailwind `my-6`
  },
  logo: {
    width: 115, // Matches Tailwind `w-[115px]`
    height: 34, // Matches Tailwind `h-[34px]`
  },
  title: {
    fontSize: 24, // Matches Tailwind `text-2xl`
    fontWeight: "600", // Matches Tailwind `font-semibold`
    color: "#FFFFFF", // Matches Tailwind `text-white`
    marginTop: 32,
    marginBottom: 24, // Matches Tailwind `mt-10`
    fontFamily: "sans-serif-medium", // Matches Tailwind `font-psemibold`
  },
  formField: {
    marginTop: 24,
  },
  buttonContainer: {
    marginTop: 30,
    width: "100%", // Matches Tailwind `mt-7`
  },
  signupContainer: {
    flexDirection: "row", // Matches Tailwind `flex-row`
    justifyContent: "center", // Matches Tailwind `justify-center`
    paddingTop: 28, // Matches Tailwind `pt-5`
    gap: 8, // Matches Tailwind `gap-2`
  },
  signupText: {
    fontSize: 16, // Matches Tailwind `text-lg`
    color: "#CDCDE0", // Matches Tailwind `text-gray-100`
    fontFamily: "sans-serif", // Matches Tailwind `font-pregular`
  },
  signupLink: {
    fontSize: 16, // Matches Tailwind `text-lg`
    color: "#FFA001", // Matches Tailwind `text-secondary`
    fontWeight: "600", // Matches Tailwind `font-psemibold`
    fontFamily: "sans-serif-medium", // Matches Tailwind `font-psemibold`
  },
});

export default SignIn;
