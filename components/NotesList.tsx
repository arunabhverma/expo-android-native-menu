import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SAMPLE_NOTES } from "@/constants/SampleNotes";

export const NotesList = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: 20 }}
    >
      {SAMPLE_NOTES.map((note) => (
        <Pressable key={note.id} style={[styles.noteCard]}>
          <View style={styles.noteHeader}>
            <Text style={[styles.noteTitle, { color: theme.colors.text }]}>
              {note.title}
            </Text>
            <Text style={[styles.noteDate, { color: theme.colors.text }]}>
              {note.date}
            </Text>
          </View>
          <Text style={[styles.noteContent, { color: theme.colors.text }]}>
            {note.content}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteCard: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  noteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  noteDate: {
    fontSize: 12,
    opacity: 0.7,
  },
  noteContent: {
    fontSize: 14,
    lineHeight: 20,
  },
});
